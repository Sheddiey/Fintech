import axios from 'axios'; // Import axios or any HTTP client library you are using
import { UPDATE_CUSTOMER,CHANGE_EMAIL_URL,CHANGE_PASSWORD_URL } from '../../apiConfig'; // Import your signup URL from apiConfig

/**
 * Sign up user with provided credentials.
 * @param {object} userData - User password,username and email.
 * @returns {Object} - Object indicating the success or failure of the signup request.
 */
const UpdateProfile = async (userData) => {
    if(userData.password!==userData.confirmPassword){
        return { success: false, message: 'Password and confirm password should be similar'};
    }
    try {
        // Send a POST request to the signup endpoint with user credentials
        const response = await axios.post(UPDATE_CUSTOMER, {     
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        username: userData.username,
        password: userData.password,
        user_type: userData.user_type
    });

    console.log(response);
    if (response.status === 201) {
      // If the signup is successful, return success response
      console.log('Signup successful');
      console.log('User:', response.data);  
      return {
        success: true,
        message: 'Signup successful',
        user: response.data,
      };
    } else {
      // If signup fails, handle the error response
      console.error('Signup failed:', response.data);
      return { success: false, message: 'Signup failed', error: response.data.error };
    }
  } catch (error) {
    // Handle any network or other errors that may occur during the request
    console.error('An error occurred during signup:', error.response.data);
    throw error;
  }
};
const changeEmail = async (userData) => {
  const userProfile = await sessionStorage.getItem('userProfile');
  try {
      // Send a POST request to the signup endpoint with user credentials
      const response = await axios.post(`${CHANGE_EMAIL_URL}${userProfile.id}/`,userData);

  console.log(response);
  if (response.status === 201) {
    // If the signup is successful, return success response
    console.log('Change Email successful');
    console.log('Response:', response.data);  
    return {
      success: true,
      message: 'Signup successful',
      user: response.data,
    };
  } else {
    // If signup fails, handle the error response
    console.error('Signup failed:', response.data);
    return { success: false, message: 'Signup failed', error: response.data.error };
  }
} catch (error) {
  // Handle any network or other errors that may occur during the request
  console.error('An error occurred during signup:', error.response.data);
  throw error;
}
};
const changePassword = async (userData) => {
  try {
      // Send a POST request to the signup endpoint with user credentials
      const response = await axios.post(CHANGE_PASSWORD_URL, userData);

  console.log(response);
  if (response.status === 201) {
    // If the signup is successful, return success response
    console.log('Signup successful');
    console.log('User:', response.data);  
    return {
      success: true,
      message: 'Signup successful',
      user: response.data,
    };
  } else {
    // If signup fails, handle the error response
    console.error('Signup failed:', response.data);
    return { success: false, message: 'Signup failed', error: response.data.error };
  }
} catch (error) {
  // Handle any network or other errors that may occur during the request
  console.error('An error occurred during signup:', error.response.data);
  throw error;
}
};
export { UpdateProfile,changeEmail,changePassword };
