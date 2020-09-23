
<br />
<br />

<a href="https://ibb.co/FHZ8VPs"><img src="https://i.ibb.co/vXyLYts/The-Shoppies.png" alt="The-Shoppies" border="0"></a>

<br />

### `UX Development Challenge`

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies. We need a webpage that can allow the user to save their favourite films they feel should be up for nomination. The technical requirements for this challenge are as follows:

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

This project, also provided a great chance to to really understand how Design and Development contribute to shaping an experience while challenging me to apply concepts in a practical way. Before going into how I added the functional requirements for this challenge, I want to quickly go over areas I focused on for each discipline when approaching my version of Shoppies:

<br />

### Design: Establishing Clear Flow

One of the issues with the initial design provided for this challenge (below) is that the user has to piece together the narrative of the experience and what they are seeking to accomplish. With some effort and contextual clues a user might figure out that The Shoppies is some sort of movie award ceremony they are able to nominate movies to, but having little to no guidance would likely lead to a less than ideal experience.

<br />

<a href="https://ibb.co/bdDSQx1"><img src="https://i.ibb.co/zfDyQ1s/Shoppies-Provided.png" alt="Shoppies-Provided" border="0"></a>

<br />

Due to this, my design goal was to create a clearer narrative for the user journey of nominating movies for The Shoppies by applying a variety of [Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). Of the ten most common usability heuristics, the primary ones I incorporated into this design are the following:

- [Visibility of system status](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%231%3A%20Visibility%20of%20system%20status)
- [Match between system and real world](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%232%3A%20Match%20between%20system%20and%20the%20real%20world)
- [Recognition rather than recall](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%236%3A%20Recognition%20rather%20than%20recall)
- [Flexibility and efficiency of use](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use)
- [Aesthetic and minimalist design](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%238%3A%20Aesthetic%20and%20minimalist%20design)
- [Help and documentation](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%2310%3A%20Help%20and%20documentation)

Using these principles as guidance for my design changes, which I will explain in detail in the following sections, I was able to take this initial design to the final live version which can be viewed [here](https://shoppies.netlify.app/).

<br />

### Development: Incorporating New & Old Concepts

Since I just started my exploration into Development this year, one of my goals was to venture out from the development skills I was comfortable with in order to challenge myself and broaden my development knowledge. An example of this is React Hooks, a concept not covered in the course I took, which required me to re-learn how to do component lifecycle methods as I had only used their class and functional component counterparts before.

While applying hooks and their lifecycle methods were a sizeable part of this project, I also utilized the following new and old concepts to bring my version of Shoppies to life. I'll be going more into detail into the why and how these were applied, but for now this is the high-level overview of what I will cover:

- [React Hooks](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
  - [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
  - [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
  - [useHistory](https://reactrouter.com/web/api/Hooks/usehistory#usehistory:~:text=useRouteMatch-,useHistory,The%20useHistory%20hook%20gives%20you%20access%20to%20the%20history%20instance%20that%20you%20may%20use%20to%20navigate.,-import)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Array Methods](https://www.w3schools.com/jsref/jsref_obj_array.asp)
  - [Push](https://www.w3schools.com/jsref/jsref_obj_push.asp)
  - [Unshift](https://www.w3schools.com/jsref/jsref_obj_unshift.asp)
  - [Split](https://www.w3schools.com/jsref/jsref_obj_split.asp)
  - [Splice](https://www.w3schools.com/jsref/jsref_obj_splice.asp)
  - [Find](https://www.w3schools.com/jsref/jsref_obj_find.asp)
  - [Filter](https://www.w3schools.com/jsref/jsref_filter.asp)
- [OMDB API](http://www.omdbapi.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Netlify](https://www.netlify.com/)

<br />

### General: Folder Structure

Lastly, my folder structure (seen below) is organized by grouping similar files together which aims for scale as I add more features, pages and implement responsiveness. 

<br />

```
Shoppies
├── README.md
├── package.json
├── node_modules
├── build
├── .netlify
├── public
└── src
    ├── assets
    │   ├── icons
    │   ├── images
    │   └── logos
    ├── components
    │   ├── Banner
    │   ├── Header
    │   ├── HelpDropdown
    │   ├── Movie
    │   ├── MovieDetails
    │   ├── NominateButton
    │   ├── NominationList
    │   ├── NominationPlaceholder
    │   ├── Nominee
    │   ├── Overlay
    │   ├── RemoveButton
    │   ├── SearchBar
    │   ├── SearchDropdown
    │   └── SearchResults
    ├── hooks
    │   └── useContext.jsx
    ├── pages / Main
    │   ├── Main.jsx
    │   └── Main.scss
    ├── styles
    │   ├── partials
    │   └── baseline.scss
    ├── App.js
    └── index.js
```

<br />
<br />

# Search OMDB and display the results (movies only)

<br />

### Design: Guided Search

Before a user is able to search for movies they want to nominate, they might require a bit more context for what they are doing before they make any actions. With the original provided design, there was no clear starter state so my goal was to provide more context into the Shoppies experience with the following features:

- Task Header with desired outcome and option for additional information
- Empty state with instructions for how to begin the experience
- Initial search dropdown for communicating query type and error handling 

These features gradually guide users towards making their initial movie nomination through the search bar with the knowledge of what they are doing, rather than them trying to figure it out themselves which leans into the [Help and documentation](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%2310%3A%20Help%20and%20documentation) usability heuristic. However, for users that might already be familiar with Shoppies, they can easily navigate to the search bar located prominently at the top without having to focus on everything else below which leans into [Flexibility and efficiency of use](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use).

Regardless of product familiarity, once a user is at the search bar it functions in the way they would expect with movie listings being displayed below as they type in each character:

<br />

<a href="https://imgbb.com/"><img src="https://i.ibb.co/K7yP3fq/ezgif-com-video-to-gif-2.gif" alt="ezgif-com-video-to-gif-2" border="0"></a>

> Note: The award ceremony illustration for the empty nomination state was not designed by myself but is instead sourced from [Undraw](https://undraw.co/), a great open-source library for illustrations.

<br />

### Development: Dynamic Search Results

After registering an API Key for the OMDB API, I used Postman to run a quick test and figure out what end-points I would need to grab the correct search results. These end-points and specified search type of "movie" used to limit the search results were turned into variables to be used in all OMBD API calls.

<br />

```javascript
    // SearchBar.jsx (line 13 - 15)
    
    const API_URL = "https://www.omdbapi.com/?";
    const API_KEY = (hidden); // 8-character string
    const queryType = "Movie";
```

<br />

From there, I used an axios get request to return search data from the OMBD API that fit the criteria for what the user was inputting into the Search Bar component. Rather than a user having to submit their search query manually after they typed in a movie title, the results are automatically updated and displayed as a user adds or removes characters from their search input. This is made possible through the useEffect hook which only runs whenever the searchQuery value changes, similar to the way that the componentDidUpdate lifecycle method works with prevProps/prevState. The benefit of this setup is that it:

- Provides users with immediate feedback on what they are looking for
- Limits the amount of characters needed to find a result
- Reduces component re-renders to when values have actually changed

<br />

```javascript
    // SearchBar.jsx (line 50 - 60)
    
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

The response data is then passed down as props through the SearchDropdown and SearchResults Components to be used by each Movie Component listing. However, while all movies have a title, year and IMDB Id, not all have a poster. As a fallback to this issue, whenever a Poster returns the string "N/A" (denoting no poster) the movie poster is replaced with an award icon in its place.

<br />

```javascript
    // Movie.jsx (line 12 - 57)
    
    const Movie = (props) => {
        const {nominations} = useContext(NomContext);
        const {Title, Year, imdbID, Poster} = props
        const [maxNominations, setMaxNominations] = useState(false)

        // (line 17-24)

        return (
            <li className="movie">
                <Link
                    to={{
                        pathname: `/movie/${imdbID}`,
                        selectedMovie: {movieID: imdbID}
                    }} 
                    className="movie__listing">
                    {Poster !== "N/A"
                        ?   <img 
                                className="movie__preview" 
                                src={Poster}
                                alt={`${Title} (${Year}) Poster`}
                            />
                        :   <img 
                                className="movie__placeholder" 
                                src={Placeholder}
                                alt="Movie Poster Placeholder"
                            />
                    }
                    <div className="movie__details">
                        <span className="movie__title">{Title}</span>
                        <span className="movie__year">({Year})</span>
                    </div>
                </Link>
                {maxNominations
                    ?   <></>
                    :   <NominateButton id={imdbID} />
                }
            </li>
        );
    }
```

<br/>
<br />

# Add a movie from the search results to our nomination list

<br />

### Design: Focused Selections

Compared to the provided design where the header, search bar, search results and movie nominations were all visible and usable at the same time, I took a more focused approach. When a user selects the search bar and searches for a movie title, the rest of the app is darkened to focus the user in on the current task of nominating movies to reduce their [cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/). However, even with the search bar being the current focus, users are still able to see the task header and nomination list as it is updated with new nominations. This was important from a user experience standpoint as it keeps important information visible at all times while providing feedback for what their nominate action does, which ties into the following Usability Heuristics:

- [Recognition rather than recall](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%236%3A%20Recognition%20rather%20than%20recall)
- [Visibility of system status](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%231%3A%20Visibility%20of%20system%20status)

Since a user doesn't have to scroll, visit another page or complete another action to confirm their action was successfull, they can continue nominating their next movie through the following methods:

- Manually removing their search query to type in a new one
- Clicking the "clear" button within the search bar to reset their search
- Clicking the "clear movie results" button at the bottom of the search dropdown to reset their search

Having all of these ways to manage their search aims to speed up how they interact with Shoppies. For instance, if the movie they were looking for was at the top of the list, clicking the search bar clear would be the fastest option. Whereas, if the movie they wanted to nominate was at the bottom of the dropdown it would be quicker to click the bottom clear button without breaking the flow of how they are viewing the listings as it is at the bottom. While there are many other situations and use cases for which option they might select, but the point is this setup lends to the following Usability Heuristics:

- [User control and freedom](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use)
- [Flexibility and efficiency of use](https://www.nngroup.com/articles/ten-usability-heuristics/#articleBody:~:text=%237%3A%20Flexibility%20and%20efficiency%20of%20use)

<br />

<a href="https://imgbb.com/"><img src="https://i.ibb.co/dGMtH75/ezgif-com-video-to-gif-3.gif" alt="ezgif-com-video-to-gif-3" border="0"></a>

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

> Note: This solution still isn't where it needs to be as I am tracking a bug where the first movie nomination added briefly flashes a previously nominated listing first. This only occurs with the first nomination added when a user returns to an empty nomination state after removing all nominations, but is none-the-less something I plan on fixing.

<br />

### Development: Checking for already Nominated Movies

In the same spirit as trying to prevent duplicate data from being added above, I also needed to prevent users from being able to add the same movie multiple times, even if the movie was truly that good. To acomplish this, I used the [find array method](https://www.w3schools.com/jsref/jsref_find.asp) to determine if the IMDB id's of any of the search results match any IMDB id's of movies stored in local storage or in the useContext nominations array.

<br />

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

<a href="https://imgbb.com/"><img src="https://i.ibb.co/DtBbxX7/ezgif-com-video-to-gif-4.gif" alt="ezgif-com-video-to-gif-4" border="0"></a>

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

Now the question is why did I use filter here, when I used find before when trying to do a similar action while checking for already existing movie nominations? The reason for this is because "find" stops after the first value is found while "filter" returns an array of values. This key difference enabled me to quickly filter out the value I wanted to remove and in the next step set the adjusted array as the new local storage array to be used in updating other areas of the app.

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

<a href="https://imgbb.com/"><img src="https://i.ibb.co/W2FhDrv/ezgif-com-video-to-gif-5.gif" alt="ezgif-com-video-to-gif-5" border="0"></a>

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

On the flip side, the current experience ends with a user being able to submit their movie nominations but there is nothing to tie a specific user to their nominations. To alleviate this issue, I would look into User Authentication so that users could either sign-in, or at the very least use an email, to connect a user to their submission. Providing users with the ability to share their nominations with their friends through social media would be beneficial for growth, reach and building up an audience before the Shoppies officially begins. 
