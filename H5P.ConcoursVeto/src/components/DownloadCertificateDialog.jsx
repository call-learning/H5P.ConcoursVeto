import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useTranslations } from '../hooks/useTranslation.js';
import { handleDownloadPDF } from '../helpers/pdfGenerator.js';

function DownloadCertificateDialog({ open, onClose, surveyFeedback }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [psupId, setPsupId] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const { translate } = useTranslations();

  const handleConfirm = () => {
    if (firstName && lastName && psupId) {
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
          label={translate('firstname')}
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={confirmed}
        />
        <TextField
          margin="dense"
          label={translate('lastname')}
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={confirmed}
        />
        <TextField
          autoFocus
          margin="dense"
          label={translate('psupid')}
          fullWidth
          value={psupId}
          onChange={(e) => setPsupId(e.target.value)}
          disabled={confirmed}
        />
      </DialogContent>
      <DialogActions>
        {!confirmed ? (
          <Button onClick={handleConfirm} color="primary" disabled={!firstName || !lastName}>
            {translate('confirm')}
          </Button>
        ) : (
          <Button onClick={() => handleDownloadPDF(firstName, lastName, psupId, onClose)} color="primary">
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
