import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Share, FlatList } from "react-native";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/FontAwesome"; 
import { likePost, unlikePost } from "../../ApplicationHome/ServicesHome/LikeService";

const { width, height } = Dimensions.get("window");

const videoUrls = [
  "https://videos.pexels.com/video-files/4115291/4115291-uhd_1440_2732_25fps.mp4",
  "https://videos.pexels.com/video-files/4057322/4057322-uhd_1440_2732_25fps.mp4",
  "https://videos.pexels.com/video-files/5829173/5829173-uhd_1440_2560_24fps.mp4",
  "https://videos.pexels.com/video-files/4678261/4678261-hd_1080_1920_25fps.mp4"
];

const HomeScreen = () => {
  const [likedPosts, setLikedPosts] = useState([]); // State to store liked posts
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current video
  const videoRef = useRef(null); // To control video playback

  const handleLikePress = async (postId) => {
    if (likedPosts.includes(postId)) {
      // Unlike the post
      await unlikePost(postId);
      setLikedPosts(likedPosts.filter(id => id !== postId)); // Remove postId from likedPosts
    } else {
      // Like the post
      await likePost(postId);
      setLikedPosts([...likedPosts, postId]); // Add postId to likedPosts
    }
  };

  const postId = 15; // Assuming the postId is static or provided by props
  const isLiked = likedPosts.includes(postId); // Check if the post is liked

  // Function to handle sharing the video
  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome video!',
        url: videoUrls[currentIndex], // Share current video URL
        title: 'Amazing Video'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing the video:', error.message);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: item }}
        ref={videoRef}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={false} // Enable sound
        paused={currentIndex !== index} // Pause the video if it's not in focus
        onLoad={() => {
          // When the video is loaded, it will automatically start playing if it is the focused video
          if (currentIndex === index) {
            videoRef.current.seek(0); // Ensure it starts from the beginning
          }
        }}
      />

      {/* Trending/Following Navigation */}
      <View style={styles.topNavContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={[styles.navText, styles.activeText]}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Following</Text>
        </TouchableOpacity>
      </View>

      {/* Side Actions */}
      <View style={styles.sideActions}>
        {/* Like Button */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleLikePress(postId)} // Like/unlike handling
        >
          <Icon 
            name="heart" 
            size={24} 
            color={isLiked ? "red" : "white"} // Change color based on like status
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="comment" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleSharePress} // Share functionality on press
        >
          <Icon name="share" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Footer Info */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Duane Renner</Text>
        <Text style={styles.footerSubText}>Share your thoughts with video Reply...</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* FlatList for video swipe-up functionality */}
      <FlatList
        data={videoUrls}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        pagingEnabled // Ensures only one item per page
        snapToAlignment="start" // Snap to top of the screen
        decelerationRate={"fast"} // Fast deceleration for swipe effect
        onMomentumScrollEnd={(e) => {
          const contentOffsetY = e.nativeEvent.contentOffset.y;
          const index = Math.floor(contentOffsetY / height);
          setCurrentIndex(index); // Update the current video index
        }}
        showsVerticalScrollIndicator={false}
        snapToInterval={height} // Snap to the screen height to ensure full-page swipe
        bounces={false} // Disable bounce effect to ensure only one video per swipe
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  topNavContainer: {
    position: "absolute",
    top: 50, // Keep the nav at the top of the screen
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 1, // Ensure it stays on top
  },
  navButton: {
    marginHorizontal: 20,
  },
  navText: {
    color: "#fff",
    fontSize: 18,
  },
  activeText: {
    fontWeight: "bold",
    color: "#9b59b6",
  },
  videoContainer: {
    width: width, // Full screen width
    height: height, // Full screen height
    justifyContent: "flex-end",
  },
  video: {
    width: "100%",
    height: "100%", // Fullscreen video
  },
  sideActions: {
    position: "absolute",
    right: 20,
    bottom: 150, // Fixed position for like, comment, and share icons
  },
  actionButton: {
    marginVertical: 10,
  },
  footerContainer: {
    position: "absolute",
    bottom: 100, // Above the bottom navigation
    left: 20,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footerSubText: {
    color: "#ddd",
    marginTop: 5,
  },
});

export default HomeScreen;
