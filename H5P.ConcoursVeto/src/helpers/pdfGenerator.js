import { jsPDF } from 'jspdf';
import { getAbsoluteURL } from './utils.js';

/**
 * Load an image from a URL and convert it to a base64 string.
 *
 * @param url
 * @param callback
 */
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

/**
 * Generate a unique key based on the user's first name, last name, and Parcoursup ID.
 *
 * @param firstName
 * @param lastName
 * @param pSupId
 * @returns {string}
 */
export function generateUniqueKey(firstName, lastName, pSupId) {
  const timestamp = Date.now().toString();
  const uniqueString = `${firstName}${lastName}${pSupId}${timestamp}`;
  return btoa(uniqueString);
}

/**
 * Get the current date and time in a human-readable format.
 *
 * @returns {string}
 */
export function getCurrentDateTime() {
  const date = new Date();
  return date.toLocaleDateString();
}

/**
 * Generate a PDF document with the user's information and download it.
 *
 * @param firstName
 * @param lastName
 * @param pSupId
 * @param onClose
 * @param contentId
 */
export function handleDownloadPDF(firstName, lastName, pSupId, onClose, contentId) {
  const imagePath = getAbsoluteURL('/images/background-cert.jpg', contentId);
  loadImageAsBase64(imagePath, (backgroundImage) => {
    // Create a jsPDF document in landscape mode
    const doc = new jsPDF('landscape');
    const currentDate = getCurrentDateTime();
    const uniqueKey = generateUniqueKey(firstName, lastName, pSupId);

    // Add Background Image
    doc.addImage(backgroundImage, 'JPEG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);

    // Header Title.
    doc.setFontSize(30);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Attestation', doc.internal.pageSize.width / 2, 30, { align: 'center' });

    // Subtitle.
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(14, 132, 123); // RGB equivalent of #0e847b
    doc.text('Obligatoire pour la confirmation d’un voeu', doc.internal.pageSize.width / 2, 40, { align: 'center' });
    doc.text('Pièce constitutive du dossier d\'admissibilité', doc.internal.pageSize.width / 2, 50, { align: 'center' });
    doc.text('“Ecoles Nationales Vétérinaires : concours première année”', doc.internal.pageSize.width / 2, 60, { align: 'center' });

    // User Information.
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text("Madame / Monsieur:", 20, 90)
    doc.setFont('helvetica', 'bold');
    doc.text(`${firstName} ${lastName}`, 65, 90);
    doc.setFont('helvetica', 'normal');
    doc.text('Identifiant Parcoursup:', 20, 100);
    doc.setFont('helvetica', 'bold');
    doc.text(`${pSupId}`, 65, 100);
    doc.setFont('helvetica', 'normal');

    // Confirmation Text.
    const confirmationText = [
      "a rempli l’ensemble des éléments du questionnaire de pré-orientation vers les études",
      "vétérinaires, a téléchargé le règlement du concours, s’est engagé à le lire et peut",
      "poursuivre l’expression du voeu correspondant sur la plateforme Parcoursup.",
    ];
    let yPosition = 120;
    confirmationText.forEach(line => {
      doc.text(line, 70, yPosition, { align: 'justify', maxWidth: doc.internal.pageSize.width - 40 });
      yPosition += 7;
    });

    // Date and Signature.
    doc.text('Attestation délivrée le:', 20,160);
    doc.setFont('helvetica', 'bold');
    doc.text(`${currentDate}`, 65, 160);

    doc.text("Le responsable de la gestion du concours vétérinaire post-bac", 140, 170);

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
