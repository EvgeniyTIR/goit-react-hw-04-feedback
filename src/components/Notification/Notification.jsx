import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <Box textAlign="center" color="offline">
    {message}
  </Box>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
