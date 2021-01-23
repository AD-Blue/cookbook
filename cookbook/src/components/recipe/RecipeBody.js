import React from 'react'

export default function RecipeBody() {
    return (
        <div className="w-3/4">
            <div className="px-6">
                <p>
                    Recipe description goes here so I'm just gonna write a bunch of stuff
                    and yeah hopefully it takes up a lot of space cuz ipsum lorem is too big to justify using I think but then again maybe
                    not so who knows I'll just talk about my salmon that I pan fry for 6 minutes one side and then 3ish minutes the other
                    side which I then season both sides with lemon pepper and cajun peppers(spices? idk).
                </p>
            </div>
            <div className="px-12 py-8 flex flex-row justify-between">
                <p className="mr-2">
                    Ingredients
                    <ul className="list-disc">
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
                <p className="py-2">
                    Directions
                    <ol className="list-decimal">
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
