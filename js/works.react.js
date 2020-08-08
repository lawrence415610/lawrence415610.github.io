'use strict';

const cards = [
    {
        'name': 'Agilo',
        'type': 'Development',
        'description': 'An agile Kanban tool',
        'CreatedBy': 'React, Redux, Firebase',
        'pic': '../Resources/uploads/agilo.png',
        'live': 'https://agile-project-manager-tawny.vercel.app/'
    },
    {
        'name': 'City Weather',
        'type': 'Development',
        'description': 'A city weather search app',
        'CreatedBy': 'React hook, React thunk',
        'pic': '../Resources/uploads/cityweather.png',
        'live': 'http://yelin-weather-app.s3-website-ap-southeast-2.amazonaws.com/'
    },
]

const CardList = ({ cards }) =>
    <ul class="row">
        {
            cards.map(card => (
                <li class="col-lg-4 col-md-6 work__wrapper" data-type={card.type}>
                    <a href={card.live}>
                        <div class="desc">
                            <div class="project-desc">
                                <h5>{card.name}</h5>
                                <span>{card.type}</span>
                                <span>{card.description}</span>
                            </div>
                            <img src={card.pic} alt="img" />
                        </div>
                    </a>
                </li>
            ))
        }
    </ul>

let domContainer = document.querySelector('#works__react__dom');
ReactDOM.render(<CardList cards={cards} />, domContainer);