1. Gathering the Track URIs from the User's Playlist
Objective: Collect all the unique identifiers (uris) of the tracks in the playlist that the user has created.

How It Works:

Each track in the playlist is represented by an object, and one of the properties of this object is the uri.
To save the playlist to Spotify, you need to collect these URIs into a single array. This array is what you'll 
later use to tell Spotify which tracks to include in the playlist.
Example Scenario: Imagine your playlist has three tracks. You will loop through these tracks, extract their uri 
properties, and store them in an array.
Why It's Important: Spotify’s API requires a list of track URIs to create a playlist on the user’s account. 
Without these URIs, you wouldn't be able to tell Spotify which specific tracks to add to the playlist.

2. Preparing to Save the Playlist (Simulating Interaction with Spotify)
Objective: Prepare the playlist data (e.g., the name of the playlist and the list of track URIs) 
and simulate the process of saving it to Spotify.

How It Works:

Normally, this step would involve making an API call to Spotify, sending the playlist name and 
the array of URIs to create a new playlist on the user's account.
However, since you might not have the actual Spotify API integration set up yet, you can simulate this process.
Simulating (Mocking):
Instead of making real API calls, you can create a mock function that pretends to send the data to Spotify. 
This mock function will allow you to test the functionality of your app without needing to connect to the actual API.
For example, you could log the playlist name and URIs to the console or store them temporarily to mimic the saving process.
Why It's Important: This step allows you to test your application’s logic and flow without relying on external services, 
making it easier to develop and debug.
3. Resetting the Playlist
Objective: Clear the current playlist name and tracks from the web app’s state so the user can start fresh with a new playlist.

How It Works:

After the playlist is "saved" (or after the mock save operation is complete), you need to reset the playlist within your application.
This involves clearing out the playlist’s name and removing all tracks from the playlist array.
User Experience: Once the playlist is reset, the user will see an empty playlist form where they can start adding new tracks or 
give a new name for the next playlist.
Why It's Important: Resetting ensures that the user has a clean slate to work with, preventing any confusion about whether the 
playlist has been saved or not.
4. Testing with Mock Data
Objective: Use mock data to simulate the playlist and tracks, allowing you to test the entire process without needing 
real Spotify data or an API connection.

How It Works:

Mock Data: Create a fake dataset that resembles what you would get from Spotify. For example, you could create an array of track objects, 
each with properties like name, artist, album, and uri.
Using Mock Data in Tests:
Instead of fetching real tracks from Spotify, use this mock data in your component tests.
You can pass the mock data into your components and test how they behave—such as whether the URIs are correctly gathered, 
if the "save" function is called correctly, and if the playlist is reset afterward.

Benefits:
Isolated Testing: Mock data allows you to test the functionality of your components in isolation, without external dependencies.
Control: You have complete control over the data, which makes it easier to simulate different scenarios (e.g., what happens if the playlist is empty?).

Summary of Expanded Steps:
1). Gather Track URIs: Extract the uri from each track in the user's playlist and compile them into an array. This array is essential 
for saving the playlist.

2). Simulate Saving to Spotify: Prepare the playlist data and simulate saving it to Spotify using mock functions. This allows you to
 test the process without needing actual API access.

3). Reset the Playlist: Clear the playlist name and tracks from the app after the save operation, giving the user a fresh start 
for creating a new playlist.

4). Test with Mock Data: Use a predefined set of mock tracks to simulate and test the functionality of your playlist saving 
feature. This helps in verifying that your code works as expected without relying on external data sources.

By following these expanded steps, you ensure that your playlist-saving feature is well-structured, testable, a
nd ready for integration with the Spotify API in the future.