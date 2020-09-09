
<br />
<br />

<a href="https://ibb.co/FHZ8VPs"><img src="https://i.ibb.co/vXyLYts/The-Shoppies.png" alt="The-Shoppies" border="0"></a>

<br />

### `UX Development Challenge`

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

> Design Goals

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

> Technical Requirements

- Search results should come from OMDB's API
- Each search result should list at least its title, year of release and a button to nominate that film
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list
- If a search result has already been nominated, disable its nominate button
- Display a banner when the user has 5 nominations

> Bonus Feature

- Save nomination lists if the user leaves the page


<br />
<br />

# Project Design

Before going into how I added the functional requirements for this challenge, I want to quickly go over my thought process behind my version of Shoppies, and why I designed it the way I did.

After nailing the initial structure of the project based on the graphic that was provided my design goal was to create a clearer narrative for what users were hoping to accomplish on this page, and provide additional context for what it was they were doing on a moment to moment basis.

In order to accomplish this, I relied heavily on Usability Heuristics as a guide to ensure my changes would be intuitive. Of the ten most common usability heuristics, the primary ones I incorporated into this design are the following:

- Visibility of system status
- Match between system and real world
- Recognition rather than recall
- Flexibility and efficiency of use
- Aesthetic and minimalist design
- Help and documentation

With these guidelines in mind, I was able to take my Shoppies design from this:

<a href="https://ibb.co/Rpcx6Ds"><img src="https://i.ibb.co/MD7Y1Ct/Shoppies-Initial.png" alt="Shoppies-Initial" border="0"></a>

To this:

<a href="https://ibb.co/6rFnVYv"><img src="https://i.ibb.co/7jKY8vg/Shoppies-Final.png" alt="Shoppies-Final" border="0"></a>

<br />
<br />

# Search OMDB and display the results (movies only)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Dynamic Search Results

```javascript
    // Main.jsx (line 36 - 44)
    
    useLayoutEffect(() => {
    
        // Gets Movie Results from OMDB API that match Search Bar Input
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
            
            // Sets Results Listings as the Response Data
            .then(response => {
                setResultsListing(response.data.Search)
            })
            .catch(error => {
                console.log(error)
            })
            
    }, [searchQuery, storedNoms]); // Updates on Search Input Changes
```

<br />
<br />

# Add a movie from the search results to our nomination list

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Adding Movie to Local Storage

```javascript
    // NominateButton.jsx (line 11-19)
    
    function addNomination() {
        
        // Gets nomination data from local storage if exists, else create empty array
        let currentNominations = JSON.parse(localStorage.getItem('nominations')) || [];
        
        // Creates nomination object with unique OMDB Movie ID
        let newNomination = { "movieNomination": id }

        // Pushes new nomination object to nominations array
        currentNominations.push(newNomination);
        
        // Sets updated nominations array as new local storage object
        localStorage.setItem("nominations", JSON.stringify(currentNominations));
        
        // Sets Nominations state (Context API) as new nominations array
        setNominations(JSON.parse(localStorage.getItem("nominations")));
        
        // Toggles Button state to disabled to prevent duplicate movie nominations
        setIsNominated(true);
    }
```

<br />
<br />

# View the list of films already nominated

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Displaying Nominated Movies

```javascript
    // NominationList.jsx (line 21-46)

    useLayoutEffect(() => {
    
        // Maps Nomination Data to Nominee Object
        nominations.map((item) => {
            axios.get(`${API_URL}i=${item.movieNomination}&apikey=${API_KEY}`)
                .then(response => {
                
                    const nominee = ({
                        title: response.data.Title,
                        year: response.data.Year,
                        id: response.data.imdbID,
                        poster: response.data.Poster
                    })

                    // Adds Nominee Data to the front of New Nominations Array
                    newNominations.unshift(nominee)
                        
                    // Removes old data from the end of the New Nominations Array
                    newNominations.splice(nominations.length, newNominations.length - nominations.length)

                    // Sets New Nomination Array to be used for the Nomination Listings
                    setNominationListing(newNominations)
                    setShouldUpdate(true)
                })
                .catch(error => {
                    console.log(error)
                })
        })
        
    }, [nominations, setNominations]); // Updates on Nomination Changes
```

<br />

### Checking for already Nominated Movies

```javascript
    // Nominate Button.jsx (line 22-29)
    
    useEffect(() => {
        
        // Returns Object if matching ID exists in Nominations
        const match = nominations.filter(item => item.movieNomination === id);

        // If Match exists, disables the movies' Nomination Button 
        (match.length !== 0 
            ?   setIsNominated(true)
            :   setIsNominated(false)
        )
        
    }, [nominations, id]); // Updates on Nomination Changes
```

<br />
<br />

# Remove a nominee from the nomination list

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Selecting Movies To Remove

```javascript
    // RemoveButton.jsx (line 10-16)
    
    function removeNomination() {
        
        // Gets array of locally stored movie nominations
        let stored = JSON.parse(localStorage.getItem("nominations"));
        
        // Returns Array of Nominations that don't match current Nomination
        stored = stored.filter(item => item.movieNomination !== id);
        
        // Sets Local Storage and Context State as the Filtered Array
        localStorage.setItem("nominations", [JSON.stringify(stored)]);
        setNominations(stored)
    }
```

<br />
<br />

# Display a banner when the user has 5 nominations

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Conditional Notification Banner

```javascript
    // Banner.jsx (line 10-15)
    
    useEffect(() => {
    
        // Displays Banner when Nominations (Context API) reaches 5
        (nominations.length >= 5
            ?   setShowBanner(true)
            :   setShowBanner(false)
        )
        
    }, [nominations]); // Updates on Nomination Changes
```

<br />
<br />

# Reflection

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
