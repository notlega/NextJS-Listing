import Image from 'next/image';
import PropTypes from 'prop-types';

const ButtonCard = ({
  username,
  userProfilePicture,
  postedDate,
  listingImage,
  listingTitle,
  listingPrice,
  listingQuality,
  onClickFunction,
}) => (
  <button className="card w-full bg-base-100 hover:shadow-2xl" onClick={onClickFunction}>
    <figure className='p-1'>
      <Image src={listingImage} alt={listingTitle} className="rounded-md" />
    </figure>
    <div className="card-body text-left p-1.5 gap-0">
      <p>{listingTitle}</p>
      <h2 className='card-title'>S${listingPrice}</h2>
      <p>{listingQuality}</p>
    </div>
  </button>
);

ButtonCard.propTypes = {
  username: PropTypes.string.isRequired,
  userProfilePicture: PropTypes.object.isRequired,
  postedDate: PropTypes.string.isRequired,
  listingImage: PropTypes.object.isRequired,
  listingTitle: PropTypes.string.isRequired,
  listingPrice: PropTypes.number.isRequired,
  listingQuality: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func,
};

export default ButtonCard;
