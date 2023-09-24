function Card({ png, name }) {

    const Description = () => {
        switch (name) {
            case "KotKamil": return <div>Jego stary to chuj</div>;
            default: return <div>Kode4mi to grupa stworzona przez 4 kolegów, którzy poznali się w jednym celu - zwalczania I/O Errorów</div>;
        }
    }

    return (
        <div className='card card-side bg-slate-700 shadow-xl w-3/4'>
            <figure>
                <img src={png} className='w-full' />
            </figure>
            <div className='card-body'>
                <h1 className='card-title text-2xl'>{name}</h1>
                {Description()}
                <div className='card-actions justify-end'></div>
            </div>
        </div>
    );
}

export default Card;