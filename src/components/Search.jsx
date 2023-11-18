import { useState } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';

const Search = ({ setSearchedQuery }) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid column={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2 className='search-heading' style={{margin:'20px'}}>
                    Explore recipes with <span style={{ color: '#2185D0' }}>DishDive</span>
                </h2>
                
                <Form onSubmit={onFormSubmit}>
                    <Input 
                        placeholder="Give us Ingredient,we'll give you the Recipe"
                        action={{ icon: 'search', color: 'blue' }}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        style={{ width: '290px' }}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Search;