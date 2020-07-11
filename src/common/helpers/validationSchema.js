export const validationSchema = {
  firstName: {
    required: true,
    validator: {
      regEx: /^[a-z ,.'-]+$/i,
      errorMessage: "Invalid First Name Format"
    }
  },
  lastName: {
    required: true,
    validator: {
      regEx: /^[a-z ,.'-]+$/i,
      errorMessage: "Invalid Last Name Format"
    }
  },
  fullName: {
    required: true,
    validator: {
      regEx: /^[a-z ,.'-]+$/i,
      errorMessage: "Invalid Full Name Format"
    }
  },
  email: {
    required: true,
    validator: {
      regEx: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
      errorMessage: "Invalid Email Format"
    }
  },
  password: {
    required: true,
    validator: {
      regEx: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      errorMessage:
        "Password should be at least 8 characters with at least one letter and one number"
    }
  },
  message: {
    required: true
  },
  articleTitle: {
    required: true
  },
  articleBody: {
    required: true
  },
  jobTitle: {
    required: true,
    validator: {
      regEx: /^[a-z ,.'-]+$/i,
      errorMessage: "Job Title should be letters only"
    }
  },
  jobRole: {
    required: true
  },
  jobLocation: {
    required: true
  },
  jobDescription: {
    required: true
  },
  location: {
    required: true
  },
  mobileNumber: {
    required: true,
    validator: {
      regEx: /^([+]\d{2})?\d{10}$/,
      errorMessage: "Please enter a valid mobile number"
    }
  }
};
