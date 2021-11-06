import React from 'react';
import FeedContainer from './FeedContainer';
import FeedComponent from './FeedComponent';
import Navbar from '../../layout/Navbar';
import Container from '../../shared/Container';


const openPosition = [{
    CompanyName:'nagaro',
    Name:'Sergiu1',
    Department:'info',
    Description:'un internship interesant',
    NumberMaxOfStudents:'10'

},
    { CompanyName:'nagaro',
        Name:'Sergiu1',
        Department:'info',
        Description:'un internship interesant',
        NumberMaxOfStudents:'10'

    },{ CompanyName:'nagaro',
        Name:'Sergiu1',
        Department:'info',
        Description:'un internship interesant',
        NumberMaxOfStudents:'10'

    },{ CompanyName:'nagaro',
        Name:'Sergiu1',
        Department:'info',
        Description:'un internship interesant',
        NumberMaxOfStudents:'10'

    },{ CompanyName:'nagaro',
        Name:'Sergiu1',
        Department:'info',
        Description:'un internship interesant',
        NumberMaxOfStudents:'10'

    },{ CompanyName:'nagaro',
        Name:'Sergiu1',
        Department:'info',
        Description:'un internship interesantun internship interesantun internship interesantun internship interesantun internship interesantun internship interesantun internship interesant',
        NumberMaxOfStudents:'10'

    },{ CompanyName:'nagaro',
        Name:'Sergiu1',
        Department:'info',
        Description:'un internship interesant',
        NumberMaxOfStudents:'10'

    }

];

const Feed = () => {
    return (
        <Container>
            <Navbar />
            <FeedContainer>
                {openPosition.map((value)=>(
                    // eslint-disable-next-line react/jsx-key
                    <FeedComponent name={value.Name}
                                   department={value.Department}
                                   companyName={value.CompanyName}
                                   description={value.Description}
                                   numberOfMaxStudents={value.NumberMaxOfStudents}
                    />
                ))}
            </FeedContainer>

        </Container>
    );
};

export default Feed;