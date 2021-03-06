import React, { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign/';
import colors from '../../../lib/colors';
import styles from './TaskBox.style.js';
import { withNavigation } from 'react-navigation';

class TaskBox extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tracking: PropTypes.bool,
    start: PropTypes.number,
    end: PropTypes.number,
    current: PropTypes.number,
  }

  render () {
    const {
      id,
      name,
      user,
      tracking,
      start,
      end,
      current,
    } = this.props;

    let progress;
    let progressStyling = {};
    let onPressAction = () => {
      this.props.navigation.navigate('TaskEditor',
        { taskID: id,
          taskName: name,
          startingPoint: start,
          currentPoint: current,
          endingPoint: end
        }
      )
    };

    if (current === end) {
      progress = "Complete";
      progressStyling = {fontStyle: 'italic', color: colors.lightGray}
      onPressAction = undefined;
    } else if (tracking) {
      progress = `${current} / ${end}`;
    } else {
      progress = "Incomplete";
    }

    return (
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={onPressAction}
      >
        <View style={styles.taskCol}>
          <View style={styles.taskOutside}>
            <Text style={[styles.taskName, progressStyling]}>
              {name}
            </Text>
            <Text style={[styles.taskProgress, progressStyling]}>
              {progress}
            </Text>
          </View>
          <Text style={[styles.user, progressStyling]}>
            {user}
          </Text>
        </View>
      </TouchableOpacity>

    );
  }
}

export default withNavigation(TaskBox);
