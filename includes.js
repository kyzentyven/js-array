const friends = ['Khalid', 'Ovi', 'Tawfek', 'Mahtab', 'Rafin', 'Nehal'];

console.log(friends.includes('Ovi'));
console.log(friends.includes('Jim'));

if(friends.includes('Jim')) {
    console.log('Party');
}
else {
    console.log('No food, we are fasting.');
}