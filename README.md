
<br />
<br />

<a href="https://ibb.co/FHZ8VPs"><img src="https://i.ibb.co/vXyLYts/The-Shoppies.png" alt="The-Shoppies" border="0"></a>

<br />

### `UX Development Challenge`

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

<br />

### `Technical Requirements`

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

There was a brief moment of time where I considered not taking on this UX Development challenge as I only recently got into development and wasn't sure if I was ready to jump into a job that revolved around it. However, as somone who is currently one movie away from completing the top 100 movies, and 70 away from completing all 250 top rated movies on IMDB, I couldn't give up the chance to combine my continued love for movies while reinvigorating my new found exploration into development.

This project, also provided a great chance to to really understand how Design and Development contribute to shaping an experience while challenging me to apply concepts in a practical way. Before going into how I added the functional requirements for this challenge, I want to quickly go over my thought process and areas I focused on when approaching my version of Shoppies:

<br />

### Design: Utilizing Usability Heuristics

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

### Development: Incorporating New Techniques

In order to accomplish this, I relied heavily on [Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) as a guide to ensure my changes would be intuitive. Of the ten most common usability heuristics, the primary ones I incorporated into this design are the following:

- [React Hooks](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%231%3A%20Visibility%20of%20system%20status)
- [useEffect & useLayoutEffect](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%232%3A%20Match%20between%20system%20and%20the%20real%20world)
- [useContext](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%236%3A%20Recognition%20rather%20than%20recall)
- [Local Storage](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use)
- [Array Methods](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [OMDB API](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%238%3A%20Aesthetic%20and%20minimalist%20design)

<br />
<br />

# Search OMDB and display the results (movies only)

<br />

### Design: Focused Search

After nailing the initial structure of the project based on the graphic that was provided my design goal was to create a clearer narrative for what users were hoping to accomplish on this page, and provide additional context for what it was they were doing on a moment to moment basis.

<br />

<a href="https://ibb.co/hgYrzP5"><img src="https://i.ibb.co/8mYGZW3/Shoppies-Phase-1.png" alt="Shoppies-Phase-1" border="0"></a>

<br />

### Development: Dynamic Search Results

<br />

```javascript
    // SearchBar.jsx (line 11 - 13)
    
    const API_URL = "https://www.omdbapi.com/?";
    const API_KEY = (hidden); // 8-character string
    const queryType = "Movie";
```

<br />

```javascript
    // SearchBar.jsx (line 37 - 47)
    
    useEffect(() => {
        
        // Gets Movie Results from OMDB API that match Search Bar Input
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
            .then(response => {
                setResultsListing(response.data.Search)
            })
            .catch(error => {
                console.log(error)
            })
    }, [searchQuery]);
```

<br />
<br />

# Add a movie from the search results to our nomination list

<br />

### Design: Making Selections

When a user make

I am also looking to display posters of movies in the search listings in a future version to help ensure users are selecting the movie they intend to in order to protect against users from having to go back and forth adding, checking the movie poster as a nomination and then removing to try again which is too many steps and can be solved with this small change.

<br />

<a href="https://ibb.co/23ZNR06"><img src="https://i.ibb.co/fdDvZVS/Shoppies-Phase-2.png" alt="Shoppies-Phase-2" border="0"></a>

> Note: Since I am using an unordered list with uuid key values, when nominees are added to the list they are done so in a random order. This is less than ideal for the User Experience as the movies shift around in a random way. This can make it hard to determine the movie that was just added as it might be added underneath the search results dropdown. I am fullly aware of this issue and intend to make adjustments to ensure the newest movie is listed from left to right.

<br />

### Development: Add Persisting Movie Nominations 

When I initially took on the challenge of adding persisting movie nominations, I thought it would be fairly straightforward since I've used [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#wikiArticle:~:text=The%20read%2Donly%20localStorage%20property%20allows%20you,is%2C%20when%20the%20page%20is%20closed.) before when adding a light/dark mode toggle on my portfolio site. My thought process was that I could use the values in local storage as a global state that could be pulled wherever and whenever they were needed, and any changes would trigger updates to the Shoppies UI. While this worked well for when the local storage was one value, I ran into issues when it was an array of values as it was difficult to determine when changes occured in the local storage array and the page would require a refresh to trigger a display change.

Luckily, I did some research and stumbled upon the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) Hook which allowed me to create the global state I needed, but would enable me to track when changes were made by wrapping everything in a NomContext provider: 


<br />

```javascript
    // App.js (line 12-39)
    
    function App() {
        const savedData = JSON.parse(localStorage.getItem("nominations")) || [];
        const [nominations, setNominations] = useState(savedData);
        const [showBanner, setShowBanner] = useState(false);
        
        // (line 17-28)

        return (
            <NomContext.Provider value={{ nominations, setNominations }}>
                {showBanner
                    ?   <Banner closeBanner={closeBanner}/>
                    :   <></>
                }
                <Header />
                <Main />
            </NomContext.Provider>
        );
    }
```

<br />

From here, whenever a user clicked on a movie result to add it to their movie nominations list, it is added first to local storage and then as the useContext value to trigger UI changes wherever it was needed, without having to reload the page. Essentially, I am using useContext as a trackable value that can update the DOM for the current session but using local storage as a back-up just in case a user intentionally or unintentionally leaves.

<br />

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

### Development: Displaying Nominated Movies

For displaying nominated movies I used a similar axios get request as the search results but instead of Movie Titles I used IMDB id's. These IMDB id's were pulled from the useContext nomination array, mapped to a nominee object and then added to an intermediary state of newNominations before setting the actual nominations listing as the new array of values.

<br />

```javascript
    // Main.jsx (Old Version)

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

                    // Adds Nominee Data to New Nominations Array
                    newNominations.push(nominee)
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

However, this original iteration was flawed as everytime a user added or removed a movie nomination, it would keep the current movie listings but add the new adjusted array as well, resulting in duplicate data. In order to fix this I looked into [array methods](https://www.w3schools.com/jsref/jsref_obj_array.asp) to see if I could either clear the pre-existing listings before adding new listings or filter out the data that needed to be added or removed.

What I landed on was using [unshift array method](https://www.w3schools.com/jsref/jsref_unshift.asp) method to add the newest data to the front of the nominations array, and then using the [splice array method](https://www.w3schools.com/jsref/jsref_splice.asp) to remove the excess (i.e. old data) from the end of the array. This was made reusable by splicing out the excess data based on the length of data that was being added or removed which can be seen below:

<br />

```javascript
    // Main.jsx (line 33-40)

    // Original
    newNominations.push(nominee)
    setNominationListing(newNominations)
    
    // Updated
    newNominations.unshift(nominee)                 
    newNominations.splice(nominations.length, newNominations.length - nominations.length)
    setNominationListing(newNominations)
```

<br />

Putting that all together, I was able to create a fairly streamlined system that could handle both adding and removing movie listings from the nomination listing arrays.

<br />

```javascript
    // Main.jsx (line 22-47)

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

### Development: Checking for already Nominated Movies

In the same spirit as trying to prevent duplicate data from being added above, I also needed to prevent users from being able to add the same movie multiple times, even if the movie was truly that good. To acomplish this, I used the [find array method](https://www.w3schools.com/jsref/jsref_find.asp) to determine if the IMDB id's of any of the search results match any IMDB id's of movies stored in local storage or in the useContext nominations array.

```javascript
    // NominateButton.jsx (line 22-29)
    
    useEffect(() => {
        
        // Returns Object if matching ID exists in Nominations
        const match = nominations.find(item => item.movieNomination === id);

        // If Match exists, disables the movies' Nomination Button
        (match !== undefined 
            ?   setIsNominated(true)
            :   setIsNominated(false)
        )
    }, [nominations, id]); // Updates on Nomination Change
```

<br />

If a matching IMDB id is found, the truthiness of the isNominated state is used to toggle the nominate button into a disabled state, and vice-versa.

<br />

```javascript
    // NominateButton.jsx (line 5-48)
    
    const NominateButton = (props) => {
    
        // (line 12-36)

        return (
            <button 
                className="nominate" 
                onClick={() => addNomination()} 
                disabled={isNominated}>
                <span 
                    className="nominate__label">
                    {isNominated ? "Added" : "Nominate"}
                </span>
            </button>
        );
    }
```

<br />
<br />

# Remove a nominee from the nomination list

<br />

### Design: Managing Selections

Compared to diagram of Shoppies that was provided in the challenge write-up where both search results, nominations and their respective actions were all visible at the same time, users must instead hover over the movie they want to interact with to make changes in this version. While hiding the remove button, movie name, and year behind a hover interaction works well for the [Aesthetic and minimalist design](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%238%3A%20Aesthetic%20and%20minimalist%20design) Usabilty Heuristic, it would appear to go against [User control and freedom](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%238%3A%20Aesthetic%20and%20minimalist%20design) as there isn't a clearly marked undo option or instructions for how to manage these actions.

With that being said, this change in design relies on a user's [mental model](https://www.nngroup.com/articles/mental-models/#body-content:~:text=Summary%3A%20What%20users%20believe%20they%20know,with%20designs%20that%20try%20something%20new.) of hovering over similar movie listings of Netflix to complete actions in a similiar manner as the two cover a similar niche.

<br />

<a href="https://ibb.co/6WS7vHN"><img src="https://i.ibb.co/71Ddgnb/Shoppies-Phase-3.png" alt="Shoppies-Phase-3" border="0"></a>

<br />

### Development: Selecting Movies To Remove

When the get request to the OMDB API for nominations that are added to local storage is run, one of the values that is added to the Nominee object is movie id from IMDB:

<br />

```javascript
    // Main.jsx (line 26-31)
    
    const nominee = ({
        title: response.data.Title,
        year: response.data.Year,
        id: response.data.imdbID,
        poster: response.data.Poster
    })
```

<br />

This id value is then passed through the Nominee component to be used as a reference value within the RemoveButton component: 

<br />

```javascript
    // Nominee.jsx (line 10-50)
    
    const Nominee = (props) => {
        const {title, year, id, poster} = props

        return (
            <li className="nominee">
                <div className="nominee__details">
                    <span 
                        className="nominee__title nominee__title--main">
                        {title}
                    </span>
                    <span 
                        className="nominee__year nominee__year--main">
                        ({year})
                    </span>
                    <RemoveButton id={id} />
                </div>
                
                // (line 26-47)
                
            </li>
        );
    }
```

<br />

By passing this id prop all the way down to the child RemoveButton component, I am able to determine the current movie that is selected, and therefore which movie needs to be removed as a listing. Using the [filter array method](https://www.w3schools.com/jsref/jsref_filter.asp) I compared the IMDBid values stored in a user's local storage to the nominee IMDBid value to return an array of movie nominations that weren't the current selection. 


This adjusted array was then first set in local storage as the new stored array before being set as the new global nominations array using the useContext hook to update other areas in the app.

<br />

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

### Design: Determining Next Steps

Once a user adds their fifth and final movie to their nomination list they are presented with a bottom banner (resembling the red carpet of the Oscars) that communicates how long they have to submit their nominations. In addition to this prompt, a user is given the option to either dismiss the banner or submit their nominations then and there if they are happy with their current selections. 

If a user decides to hold-off on submitting their nominations (maybe they are watching a new movie tonight) and dismisses the banner, they are still able to find the same information and actions as the banner. This ties into the following Usability heuristics:

- [Visibility of system status](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%231%3A%20Visibility%20of%20system%20status)
- [Recognition rather than recall](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%236%3A%20Recognition%20rather%20than%20recall)
- [Flexibility and efficiency of use](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use)
- [Help and documentation](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%2310%3A%20Help%20and%20documentation)   

<br />

<a href="https://ibb.co/R6k51sR"><img src="https://i.ibb.co/vd6tbT0/Shoppies-Phase-4.png" alt="Shoppies-Phase-4" border="0"></a>

<br />

### Development: Conditional Notification Banner

Using the useContext hook that is providing access to a global state for nominations, the Banner Component is able to be displayed when the number of nominations reaches 5.

<br />

```javascript
    // App.js (line 12-39)
    
    function App() {
    
        // (line 13-16)

        function closeBanner() {
            setShowBanner(false)
        }

        // Displays Banner when Nominations reach 5
        useEffect(() => {
            (nominations.length >= 5
                ?   setShowBanner(true)
                :   setShowBanner(false)
            )
        }, [nominations]); // Updates on Nomination Change

        return (
            <NomContext.Provider value={{ nominations, setNominations }}>
                {showBanner
                    ?   <Banner closeBanner={closeBanner}/>
                    :   <></>
                }
                <Header />
                <Main />
            </NomContext.Provider>
        );
    }
```

<br />
<br />

# Next Steps

At this current moment, Shoppies represents only a cross-section of an experience as it is only focused on how a user might submit their nominations for an award ceremony. If I were to build out this experience I would focus on features that bookend what I have built so far in order to create a more complete experience and narrative.

For instance, this current experience is under the assumption that users are already familiar or at least aware of what Shoppies is in order to be submitting their movies for consideration. Therefore, one area I would look into is creating an about page that would allow users who aren't familiar with the Shoppies to learn more about the awards ceremony and have an understanding of why they might want to make a submission.

On the flip side, the current experience ends with a user being able to submit their movie nominations but there is nothing to tie a specific user to their nominations. To alleviate this issue, I would look into User Authentication so that users could either sign-in, or at the very least use an email, to connect a user to their submission. Building on this, Shoppies appears to be a new award ceremony so being able to reach new audiences would be beneficial for their growth. Providing users with the ability to share their nominations with their friends through social media might help with reach and building up an audience before the Shoppies officially begins.
