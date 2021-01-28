import React from 'react'

export default function RecipeBody() {
    return (
        <div className="">
            <div className="">
                <p>
                    Recipe description goes here so I'm just gonna write a bunch of stuff
                    and yeah hopefully it takes up a lot of space cuz ipsum lorem is too big to justify using I think but then again maybe
                    not so who knows I'll just talk about my salmon that I pan fry for 6 minutes one side and then 3ish minutes the other
                    side which I then season both sides with lemon pepper and cajun peppers(spices? idk).
                </p>
            </div>
            <div className="">
                <p className="">
                    Ingredients
                    <ul className="">
                        <li>
                            Salmon
                        </li>
                        <li>
                            Olive Oil
                        </li>
                        <li>
                            Lemon Pepper Seasoning
                        </li>
                        <li>
                            Cajun Seasoning/Spices idk
                        </li>
                    </ul>
                </p>
                <p className="">
                    Directions
                    <ol className="">
                        <li>Put oil in pan, heat up</li>
                        <li>Place salmon fillet on pan, season the top and cook for 6 minutes</li>
                        <li>Flip salmon and cook the other side for 3 minutes. Season the top</li>
                        <li>Enjoy</li>
                    </ol>
                </p>
            </div>
        </div>
    )
}
