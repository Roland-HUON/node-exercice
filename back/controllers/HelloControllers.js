const HelloWorlds = (req, res) => {
    res.send('Hello Worlds !');
}
const bonjour = (req, res) =>{
    res.send('bonjour');
}
export { HelloWorlds, bonjour }