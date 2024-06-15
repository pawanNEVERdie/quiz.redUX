These are the 5 steps that we’ll go through:

Settings component
Setting up a simple redux store
Making the questions request
Adding a question component
The final page
You’ll notice that I haven’t included the styling files in the article, but you can see the app css file here.

Getting started
The first thing I did was find a good API resource for the questions. After a bit of Googling I found Open Trivia Database, which has thousands of questions and is moderated. If you take a look at the API config you can see that there are all the parameters you need to create a quiz platform: number of questions, category, difficulty, type & encoding options.

Using create-react-app, I set up using the default options, opting not to add redux initially (this is something that I reassess later). Start by running these commands in your terminal:
npx create-react-app quiz-app --template typescript

Let’s begin by working on the settings page at src/Components/Settings.js, which is the first component that the user will see.

We’re going to use a functional component, so the first step is outlining this:
Next we want to create the structure of the interface using JSX. We know from the API config that we want inputs to control the question category, question difficulty, question type, and the amount of questions.

We can retrieve the question categories from this endpoint: https://opentdb.com/api_category.php. We’re going to make this request and save the categories in the component using the React state hook and effect hook, like so:
We import useEffect and useState from react, then we can declare a state variable for the options with an initial null value. This is where we will store the data from the API response using setOptions.

In a useEffect hook we declare the api url, make a request using fetch, then pass the necessary json as a payload in setOptions.

The question categories are now available in the state as options, so let’s make them selectable!
Firstly, we declare a state variable for questionCategory, with the initial value of an empty string. We will use setQuestionCategory to update this value.

Then we want to give the option of to retrieve questions from all categories, which we hard code as an option. For the rest of the options we map the array of options, making sure to assign each option a key for reactivity. We use the name as the option display, while using the id as the option value, as this is the value expected by the API.

Now we add an onChange event named handleCategoryChange, which uses setQuestionCategory to update questionCategory in the state whenever the user selects an option.

Finally, we bind the value of the select element to questionCategory.

Now we can add in a simple loading state:
simple redux stro intiating 

and then after wrapping the provider in between App in index.tsx file and then after then having the dispatch actions having there types and after handle change handledifficult all those functions will fe changes and after that thing we will be done the disptach actions and precius states and assignin types to those things in very weel ok and calling the distpach actions and havoing the value of presetn state by central strore of the thing 
yarn add redux react-redux
yarn add redux react-redux
