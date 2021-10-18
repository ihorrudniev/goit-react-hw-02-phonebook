import "./ContactsList.css";

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="Contacts__item">
      {name}: {number}
      <button
        className="Contacts__btn"
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
