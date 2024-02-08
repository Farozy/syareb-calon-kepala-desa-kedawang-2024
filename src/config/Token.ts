export const isTokenExpired = (tokenExp: number): boolean => {
    const currentTime = Math.floor(Date.now() / 1000);
    return tokenExp <= currentTime;
};