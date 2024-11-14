import { jsPDF } from 'jspdf';

export function loadImageAsBase64(url, callback) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = url;
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL('image/jpeg');
    callback(dataURL);
  };
}

export function generateUniqueKey(firstName, lastName, pSupId) {
  const timestamp = Date.now().toString();
  const uniqueString = `${firstName}${lastName}${pSupId}${timestamp}`;
  return btoa(uniqueString);
}

export function getCurrentDateTime() {
  const date = new Date();
  return date.toLocaleDateString();
}

export function handleDownloadPDF(firstName, lastName, pSupId, onClose) {
  loadImageAsBase64('/background-cert.jpg', (backgroundImage) => {
    // Create a jsPDF document in landscape mode
    const doc = new jsPDF('landscape');
    const currentDate = getCurrentDateTime();
    const uniqueKey = generateUniqueKey(firstName, lastName, pSupId);

    // Add Background Image
    doc.addImage(backgroundImage, 'JPEG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);

    // Watermark with Date
    doc.setFontSize(40);
    doc.setTextColor(150, 150, 150);
    doc.text(currentDate, doc.internal.pageSize.width / 2, doc.internal.pageSize.height / 2, {
      align: 'center',
      angle: 45,
      opacity: 0.2,
    });

    // Header Title
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text('Attestation', 20, 20);

    // Subtitle
    doc.setFontSize(12);
    doc.text('Obligatoire pour la confirmation d’un voeu', 20, 30);
    doc.text('Pièce constitutive du dossier d\'admissibilité', 20, 38);
    doc.text('“Ecoles Nationales Vétérinaires : concours première année”', 20, 46);

    // User Information
    doc.setFontSize(12);
    doc.text(`Madame / Monsieur ${firstName} ${lastName}`, 20, 60);
    doc.text(`Identifiant Parcoursup: ${pSupId}`, 20, 70);

    // Confirmation Text
    doc.text("a rempli l’ensemble des éléments du questionnaire de pré-orientation vers les études", 20, 85);
    doc.text("vétérinaires, a téléchargé le règlement du concours, s’est engagé à le lire et peut", 20, 93);
    doc.text("poursuivre l’expression du voeu correspondant sur la plateforme Parcoursup.", 20, 101);

    // Date and Signature
    doc.text(`Attestation délivrée le ${currentDate}`, 20, 115);
    doc.text("Le responsable de la gestion du concours vétérinaire post-bac", 20, 125);

    // Encrypted Unique Key (Invisible Field)
    doc.setFontSize(6);
    doc.setTextColor(150);
    doc.text(`Unique Key: ${uniqueKey}`, 5, doc.internal.pageSize.height - 10);

    // Optionally, add metadata
    doc.setProperties({
      title: 'Attestation Parcoursup',
      subject: 'Certification',
      author: `${firstName} ${lastName}`,
      keywords: `attestation,unique-key:${uniqueKey}`
    });

    // Download PDF
    doc.save(`Attestation_${firstName}_${lastName}.pdf`);

    onClose();
  });
}
