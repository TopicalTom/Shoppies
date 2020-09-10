
<br />
<br />

<a href="https://ibb.co/FHZ8VPs"><img src="https://i.ibb.co/vXyLYts/The-Shoppies.png" alt="The-Shoppies" border="0"></a>

<br />

### `UX Development Challenge`

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

<br />

> Technical Requirements

- Search OMDB and display the results (movies only)
  - Search results should come from OMDB's API
  - Each search result should list at least its title, year of release and a button to nominate that film
  - Updates to the search terms should update the result list
- Add a movie from the search results to our nomination list
  - View the list of films already nominated
  - If a search result has already been nominated, disable its nominate button
  - Save nomination lists if the user leaves the page (Bonus)
- Remove a nominee from the nomination list
- Display a banner when the user has 5 nominations

<br />
<br />

# Project Overview

Before going into how I added the functional requirements for this challenge, I want to quickly go over my thought process behind my version of Shoppies, and why I designed it the way I did.

After nailing the initial structure of the project based on the graphic that was provided my design goal was to create a clearer narrative for what users were hoping to accomplish on this page, and provide additional context for what it was they were doing on a moment to moment basis.

<br />

### Utilizing Usability Heuristics

In order to accomplish this, I relied heavily on [Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) as a guide to ensure my changes would be intuitive. Of the ten most common usability heuristics, the primary ones I incorporated into this design are the following:

<br />

- [Visibility of system status](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%231%3A%20Visibility%20of%20system%20status)
- [Match between system and real world](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%232%3A%20Match%20between%20system%20and%20the%20real%20world)
- [Recognition rather than recall](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%236%3A%20Recognition%20rather%20than%20recall)
- [Flexibility and efficiency of use](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use)
- [Aesthetic and minimalist design](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%238%3A%20Aesthetic%20and%20minimalist%20design)
- [Help and documentation](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%2310%3A%20Help%20and%20documentation)

<br />

With these guidelines in mind, I was able to take my Shoppies design from what you see below, compared to what you can see on the currrent live version [here](https://shoppies.netlify.app/).

<a href="https://ibb.co/Rpcx6Ds"><img src="https://i.ibb.co/MD7Y1Ct/Shoppies-Initial.png" alt="Shoppies-Initial" border="0"></a>

<br />
<br />

# Search OMDB and display the results (movies only)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br />

### Front-End: Focused Search

<a href="https://ibb.co/hgYrzP5"><img src="https://i.ibb.co/8mYGZW3/Shoppies-Phase-1.png" alt="Shoppies-Phase-1" border="0"></a>

<br />

### Back-End: Dynamic Search Results

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

### Front-End: Making Selections

<a href="https://ibb.co/23ZNR06"><img src="https://i.ibb.co/fdDvZVS/Shoppies-Phase-2.png" alt="Shoppies-Phase-2" border="0"></a>

<br />

### Back-End: Adding Movie to Local Storage

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

### Back-End: Displaying Nominated Movies

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

### Back-End: Checking for already Nominated Movies

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

### Front-End: Managing Selections

<a href="https://ibb.co/6WS7vHN"><img src="https://i.ibb.co/71Ddgnb/Shoppies-Phase-3.png" alt="Shoppies-Phase-3" border="0"></a>

<br />

### Back-End: Selecting Movies To Remove

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

<br />

### Front-End: Determining Next Steps

Once a user adds their fifth and final movie to their nomination list they are presented with a bottom banner (resembling the red carpet of the Oscars) that communicates how long they have to submit their nominations. In addition to this prompt, a user is given the option to either dismiss the banner or submit their nominations then and there if they are happy with their current selections. 

If a user decides to hold-off on submitting their nominations (maybe they are watching a new movie tonight) and dismisses the banner, they are still able to find the same information and actions as the banner. This ties into the following Usability heuristics:

- [Visibility of system status](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%231%3A%20Visibility%20of%20system%20status)
- [Recognition rather than recall](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%236%3A%20Recognition%20rather%20than%20recall)
- [Flexibility and efficiency of use](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use)
- [Help and documentation](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%2310%3A%20Help%20and%20documentation)   

<br />

<a href="https://ibb.co/R6k51sR"><img src="https://i.ibb.co/vd6tbT0/Shoppies-Phase-4.png" alt="Shoppies-Phase-4" border="0"></a>

<br />

### Back-End: Conditional Notification Banner

Using the useContext hook that is providing access to a global state for nominations, the Banner Component is able to be displayed when the number of nominations reaches 5.

<br />

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

# Next Steps

At this current moment, Shoppies represents only a cross-section of an experience as it is only focused on how a user might submit their nominations for an award ceremony. If I were to build out this experience I would focus on features that bookend what I have built so far in order to create a more complete experience and narrative.

For instance, this current experience is under the assumption that users are already familiar or at least aware of what Shoppies is in order to be submitting their movies for consideration. Therefore, one area I would look into is creating an about page that would allow users who aren't familiar with the Shoppies to learn more about the awards ceremony and have an understanding of why they might want to make a submission.

On the flip side, the current experience ends with a user being able to submit their movie nominations but there is nothing to tie a specific user to their nominations. To alleviate this issue, I would look into User Authentication so that users could either sign-in, or at the very least use an email, to connect a user to their submission. Building on this, Shoppies appears to be a new award ceremony so being able to reach new audiences would be beneficial for their growth. Providing users with the ability to share their nominations with their friends through social media might help with reach and building up an audience before the Shoppies officially begins.
