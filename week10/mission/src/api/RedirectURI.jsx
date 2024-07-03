export const getRedirectURI = () => {
    const hostname = window.location.hostname;

    if (hostname === 'localhost') {
        return 'http://localhost:5173/login/auth';
    } else if (hostname === 'week1010.netlify.app') {
        return 'https://week1010.netlify.app/login/auth';
    } else if (hostname === 'main--week1010.netlify.app') {
        return 'https://main--week1010.netlify.app/login/auth';
    } else {
        throw new Error('Error: ', error);
    }
};