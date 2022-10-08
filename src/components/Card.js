import "../styles/Card.css";

const Card = ({ classes, content }) => {
    return (
        <section className={`cards ${classes} round-borders`}>
            {content}
        </section>
    );
};

export default Card;
