import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
} from 'react-native';

import _ from 'lodash';

import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './components';

class TopicList extends Component {
  constructor(props) {
    super(props);

    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this._ds.cloneWithRows([]),
      topicText: '',
      loading: true,
    };

    this._list = [];
  }

  componentWillMount() {
    Actions.refresh({
      rightTitle: '로그아웃',
      onRight: () => {
        firebase.auth().signOut();
        Actions.auth();
      },
    });
  }

  async componentDidMount() {
    const ref = firebase.database().ref('topics');
    const snapshot = await ref.once('value');
    const topicList = _.map(snapshot.val(), value => ({ ...value }));
    this.setState({
      dataSource: this._ds.cloneWithRows(topicList),
      loading: false,
    });

    // ref.on('child_added', this._onChildAdded);
  }

  // _onChildAdded = (snapshot, prevKey) => {
  //   const val = snapshot.val();
  //   if (val === null) {
  //     this.setState({
  //       loading: false,
  //     });
  //   } else {
  //     this._list.push({ ...val });
  //     this.setState({
  //       dataSource: this._ds.cloneWithRows(this._list),
  //       loading: false,
  //     });
  //   }
  // }

  _onPress = () => {
    // console.log(this.state.topicText);
    this.setState({
      topicText: '',
    });
  }

  _renderRow = rowData => (
    <CardSection>
      <Text>{rowData.title}</Text>
    </CardSection>
  );

  render() {
    let loadingComponent = null;
    if (this.state.loading) {
      loadingComponent = (
        <View style={styles.loadingStyle}>
          <Text>리스트 가져오는중...</Text>
        </View>
      );
    }
    return (
      <View>
        <View style={styles.inputContainerStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="주제를 입력하세요"
            value={this.state.topicText}
            onChangeText={topicText => this.setState({ topicText })}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            onPress={this._onPress}
          >
            입력
          </Button>
        </View>
        { loadingComponent }
        <ListView
          contentContainerStyle={styles.contentContainerStyle}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 10,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    margin: 5,
  },
  loadingStyle: {
    marginTop: 5,
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 5,
  },
  buttonStyle: {
    flex: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopicList;
