import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';

type MessageBubbleProps = {
  receivedBackgroundColor?: keyof typeof colors;
  content: string;
  timestamp: string;
  readStatus: string;
  sent: boolean;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({
  receivedBackgroundColor = 'quootrWhite',
  content,
  timestamp,
  readStatus,
  sent,
}) => {
  const receivedBgColor = colors[receivedBackgroundColor];
  const sentBgColor = colors['quootrWhite'];
  const bgColor = sent ? sentBgColor : receivedBgColor;
  const bubbleStyle = sent
    ? { ...styles.bubbleContainer, borderTopRightRadius: 3, alignSelf: 'flex-end' } as const
    : { ...styles.bubbleContainer, borderTopLeftRadius: 3, alignSelf: 'flex-start' } as const;
  const readStatusStyle = sent
    ? { ...styles.readStatus } as const
    : { ...styles.readStatus, display: 'none' } as const;
  const separatorStyle = sent
    ? { ...styles.separator } as const
    : { ...styles.separator, display: 'none' } as const;

  return (
    <View style={[styles.bubbleContainer, bubbleStyle, { backgroundColor: bgColor }]}>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.footer}>
        <Text style={styles.timestamp}>{timestamp}</Text>
        <Text style={separatorStyle}>·</Text>
        <Text style={readStatusStyle}>{readStatus}</Text>
      </View>
    </View>
  );
};


const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.60, width*0.575);

const styles = StyleSheet.create({
  bubbleContainer: {
    borderRadius: 8,
    padding: 10,
    maxWidth: maxWidth,
    marginVertical: 5,
    marginHorizontal: 35,
    borderWidth: 1,
    shadowColor: colors.quootrBlack,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    }
  },
  content: {
    fontSize: 14,
    color: colors.quootrBlack,
    fontFamily:"SpaceGrotesk-Regular"
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    height: 15,
  },
  timestamp: {
    fontSize: 12,
    color: colors.quootrBlack,
    fontFamily:"SpaceGrotesk-Regular"
  },
  separator: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 1,
    lineHeight: 18.5,
    textAlign: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
    color: colors.quootrBlack,
  },
  readStatus: {
    fontSize: 12,
    color: colors.quootrBlack,
    fontFamily:"SpaceGrotesk-Regular"
  },
});

export default MessageBubble;
