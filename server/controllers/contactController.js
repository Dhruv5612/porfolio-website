const sendEmail = require('../utils/sendEmail');

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send email
    await sendEmail({ name, email, message });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
};

module.exports = {
  submitContact
}; 