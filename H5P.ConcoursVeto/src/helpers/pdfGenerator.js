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

    // Header Title.
    doc.setFontSize(26);
    doc.setTextColor(0, 0, 0);
    doc.text('Attestation', doc.internal.pageSize.width / 2, 30, { align: 'center' });

    // Subtitle.
    doc.setFontSize(14);
    doc.setTextColor(14, 132, 123); // RGB equivalent of #0e847b
    doc.text('Obligatoire pour la confirmation d’un voeu', doc.internal.pageSize.width / 2, 50, { align: 'center' });
    doc.text('Pièce constitutive du dossier d\'admissibilité', doc.internal.pageSize.width / 2, 60, { align: 'center' });
    doc.text('“Ecoles Nationales Vétérinaires : concours première année”', doc.internal.pageSize.width / 2, 70, { align: 'center' });

    // User Information.
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Madame / Monsieur ${firstName} ${lastName}`, 20, 90);
    doc.text(`Identifiant Parcoursup: ${pSupId}`, 20, 100);

    // Confirmation Text.
    const confirmationText = [
      "a rempli l’ensemble des éléments du questionnaire de pré-orientation vers les études",
      "vétérinaires, a téléchargé le règlement du concours, s’est engagé à le lire et peut",
      "poursuivre l’expression du voeu correspondant sur la plateforme Parcoursup.",
    ];
    let yPosition = 120;
    confirmationText.forEach(line => {
      doc.text(line, 40, yPosition, { align: 'justify', maxWidth: doc.internal.pageSize.width - 40 });
      yPosition += 10;
    });

    // Date and Signature.
    doc.text(`Attestation délivrée le ${currentDate}`, 150, 160);
    doc.text("Le responsable de la gestion du concours vétérinaire post-bac", 150, 170);

    // Footer.
    doc.setFontSize(10);
    doc.setTextColor(200);
    doc.text(`${uniqueKey}`, 5, doc.internal.pageSize.height - 5);

    // Optionally, add metadata.
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
