import "../styles/Cards.css";

const Cards = ({ classes, content }) => {
    return (
        <section className={`cards ${classes} half round-borders`}>{content}</section>
    );
};

export default Cards;
