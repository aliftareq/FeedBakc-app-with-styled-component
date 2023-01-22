import React, { useState } from 'react';
import { BUTTON, H1, P, RatingCardWrapper, RatingIconBox, SubmitButton } from './ratingCard.styles';
import star from '../../assets/star.png'

const RatingCard = () => {
    const [selectedRating, setSelectedRating] = useState(0)
    console.log(selectedRating);
    return (
        <RatingCardWrapper>
            <RatingIconBox>
                <img style={{ width: "50%", height: '50%' }} src={star} alt="star-icon" />
            </RatingIconBox>
            <H1>How did we do?</H1>
            <P>Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering.
            </P>
            {
                [1, 2, 3, 4, 5].map((item, idx) =>
                    <BUTTON
                        onClick={() => setSelectedRating(item)}
                        selected={selectedRating === idx + 1}
                        as="button"
                        key={idx}>
                        {item}
                    </BUTTON>
                )
            }

            <SubmitButton>
                Submit
            </SubmitButton>
        </RatingCardWrapper>
    );
};

export default RatingCard;