export function getToday() {
    const createdAt = new Date();
    const year = createdAt.getFullYear();
    const month = (createdAt.getMonth() + 1).toString().padStart(2, '0');
    const date = createdAt.getDate().toString().padStart(2, '0');
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][createdAt.getDay()];
    const formattedDate = `${year}-${month}-${date}-${day}`
    return formattedDate;
}