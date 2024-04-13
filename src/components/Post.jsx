
const names = ['Chickpea', 'Vaishnavi']

function Post() {    
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        <div>
            <p>{chosenName}</p>
            <p>{1+1}</p>
            <p>React is awesome!</p>
        </div>
    )
}

export default Post