import 'expo-file-system';

declare module 'expo-file-system' {
  export interface FileInfo {
    size: number;
  }
}