import axios from 'axios';

const token = 'flic_d4500eeca0ab6c3c28003a87c94794c6bdb7a0406934f8b105a1dbf8abe2e011'; // Flic-Token

// Function to like a video
export const likePost = async (postId) => {
  try {
    const response = await axios.post(
      'https://api.wemotions.app/posts/add/votings',
      {
        post_id: postId,
        votingIcon: '❤️', // Change the votingIcon to the appropriate like symbol
      },
      {
        headers: {
          'Flic-Token': token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error liking the post:', error);
  }
};

// Function to unlike a video
export const unlikePost = async (postId) => {
  try {
    const response = await axios.post(
      'https://api.wemotions.app/posts/remove/votings',
      {
        post_id: postId,
      },
      {
        headers: {
          'Flic-Token': token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error unliking the post:', error);
  }
};


