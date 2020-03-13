const apiURL = "https://138.68.95.204:8181/app/resources";

export const ADD_LOOKUP = `${apiURL}/general/addLookUp`;
export const GET_LOOKUPs = `${apiURL}/general/getLookupValues`;
export const CHANGE_LOOKUP_STATUS = `${apiURL}/general/changeLookupSatus`;

export const LOGIN_URL = `${apiURL}/users/CheckUser`;
export const REGISTER_URL = `${apiURL}/users/addUser`;
export const EDIT_USER_INFO = `${apiURL}/users/editUser`;
export const GET_USER_INFO = `${apiURL}/users/getUserInfo`;
export const FEATURED_EMPLOYERS_URL = `${apiURL}/users/getFeaturedEmployer`;
export const FIND_CANDIDATE = `${apiURL}/users/SearchCanditaes`;
export const FIND_EMPLOYER = `${apiURL}/users/searchEmployer`;

export const ADD_SKILL_AND_LANG = `${apiURL}/users/addSkillandLanguage`;
export const GET_SKILLS_AND_LANG = `${apiURL}/users/getSkillsandLangauges`;
export const DELETE_SKILLS_AND_LANG = `${apiURL}/users/deleteSkillandLanguage`;

export const ADD_AWARD = `${apiURL}/users/addAwardsLinks`;
export const GET_AWARDS = `${apiURL}/users/getAwardsLinks`;
export const DELETE_AWARD = `${apiURL}/users/deleteAwardsLinks`;

export const ADD_EDUCATION = `${apiURL}/users/addlearning`;
export const GET_EDUCATIONS = `${apiURL}/users/getlearning`;
export const DELETE_EDUCATION = `${apiURL}/users/deleteLearning`;
export const UPDATE_EDUCATION = `${apiURL}/users/updatelearning`;

export const ADD_PROJECT = `${apiURL}/users/hii`;
export const GET_PROJECTS = `${apiURL}/users/hiii`;

export const ADD_EXPERIENCE = `${apiURL}/users/addExperience`;
export const GET_EXPERIENCE = `${apiURL}/users/getExperience`;
export const DELETE_EXPERIENCE = `${apiURL}/users/deletetExperience`;
export const UPDATE_EXPERIENCE = `${apiURL}/users/updateExperience`;

export const ADD_LINK = `${apiURL}/users/addAwardsLinks`;
export const GET_LINKS = `${apiURL}/users/getAwardsLinks`;
export const DELETE_LINK = `${apiURL}/users/deleteAwardsLinks`;

export const POST_JOB_URL = `${apiURL}/jobs/addJob`;
export const PENDING_JOBS_URL = `${apiURL}/jobs/getJobsForapproval`;
export const UPDATE_JOB_URL = `${apiURL}/jobs/editJobStatus`;
export const GET_JOBS_URL = `${apiURL}/jobs/getJobInfo`;
export const SEARCH_JOBS = `${apiURL}/jobs/searchJobs`;
export const APPLY_SAVE_JOB = `${apiURL}/jobs/applySaveJob`;
export const GET_JOB_APPLICANT_INFO = `${apiURL}/users/getApplicantJobInfo`;

export const ADD_ARTICLE = `${apiURL}/articles/addArticle`;
export const GET_ARTICLES = `${apiURL}/articles/getArticles`;

export const ADD_REVIEW = `${apiURL}/articles/addReview`;
export const GET_PENDING_REVIEWS = `${apiURL}/users/getReviewsForApproval`;
export const REVIEW_ACTION = `${apiURL}/users/setReviewAction`;
export const GET_EMPLOYER_REVIEW = `${apiURL}/users/getEmployerReview`;
