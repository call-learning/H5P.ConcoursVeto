import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { jsPDF } from 'jspdf';
import { useTranslations } from '../hooks/useTranslation.js';

function generateUniqueKey(firstName, lastName) {
  const timestamp = Date.now().toString();
  const uniqueString = `${firstName}${lastName}${timestamp}`;
  return btoa(uniqueString); // Basic encryption with base64 encoding.
}

function getCurrentDateTime() {
  const date = new Date();
  return date.toLocaleString(); // Returns formatted date and time.
}

function DownloadCertificateDialog({ open, onClose, surveyFeedback }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const { translate } = useTranslations();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const currentDateTime = getCurrentDateTime();
    const uniqueKey = generateUniqueKey(firstName, lastName);

    // Watermark with Date and Time
    doc.setFontSize(40);
    doc.setTextColor(150, 150, 150); // Light gray color
    doc.text(currentDateTime, doc.internal.pageSize.width / 2, doc.internal.pageSize.height / 2, {
      align: 'center',
      angle: 45,
      opacity: 0.2, // Light opacity for watermark effect
    });

    // Title
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0); // Reset color to black
    doc.text('Certificate of Completion', 20, 30);

    // User Name
    doc.setFontSize(16);
    doc.text(`Awarded to: ${firstName} ${lastName}`, 20, 50);

    // Encrypted Unique Key (Invisible Field)
    doc.setFontSize(6); // Small font size to make it less visible
    doc.setTextColor(150); // Light gray color for unobtrusive display
    doc.text(`Unique Key: ${uniqueKey}`, 5, doc.internal.pageSize.height - 10);

    // Optionally, add metadata
    doc.setProperties({
      title: 'Certificate of Completion',
      subject: 'Certification',
      author: `${firstName} ${lastName}`,
      keywords: `certificate,unique-key:${uniqueKey}`
    });

    // Download PDF
    doc.save(`Certificate_${firstName}_${lastName}.pdf`);

    onClose(); // Close the dialog
  };

  const handleConfirm = () => {
    if (firstName && lastName) {
      setConfirmed(true);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Your Information</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="First Name"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={confirmed}
        />
        <TextField
          margin="dense"
          label="Last Name"
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={confirmed}
        />
      </DialogContent>
      <DialogActions>
        {!confirmed ? (
          <Button onClick={handleConfirm} color="primary" disabled={!firstName || !lastName}>
            {translate('confirm')}
          </Button>
        ) : (
          <Button onClick={handleDownloadPDF} color="primary">
            {translate('download_certificate')}
          </Button>
        )}
        <Button onClick={onClose} color="secondary">
          {translate('cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DownloadCertificateDialog;
