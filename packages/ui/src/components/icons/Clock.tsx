import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [Clock, AnimatedClock] = createIcon({
  name: 'Clock',
  getIcon: (props) => (
    <Svg fill="currentColor" viewBox="0 0 18 18" {...props}>
      <Path d="M8.99996 0.0416565C4.05996 0.0416565 0.041626 4.05999 0.041626 8.99999C0.041626 13.94 4.05996 17.9583 8.99996 17.9583C13.94 17.9583 17.9583 13.94 17.9583 8.99999C17.9583 4.05999 13.94 0.0416565 8.99996 0.0416565ZM8.99996 16.7083C4.74913 16.7083 1.29163 13.2508 1.29163 8.99999C1.29163 4.74916 4.74913 1.29166 8.99996 1.29166C13.2508 1.29166 16.7083 4.74916 16.7083 8.99999C16.7083 13.2508 13.2508 16.7083 8.99996 16.7083ZM11.9417 11.0583C12.1858 11.3025 12.1858 11.6983 11.9417 11.9425C11.82 12.0642 11.66 12.1258 11.5 12.1258C11.34 12.1258 11.1799 12.065 11.0583 11.9425L8.55827 9.4425C8.44077 9.325 8.37496 9.1658 8.37496 9.0008V4.83414C8.37496 4.48914 8.65496 4.20914 8.99996 4.20914C9.34496 4.20914 9.62496 4.48914 9.62496 4.83414V8.74161L11.9417 11.0583Z" />
    </Svg>
  ),
})