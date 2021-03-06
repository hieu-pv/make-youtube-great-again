import IMeta from '../../interfaces/meta';
import { IDownloadMp3Data } from './interfaces/download-mp3.interface';

const meta: IMeta<IDownloadMp3Data> = {
  id: 'myga-dl-mp3',
  description: 'Enables you to convert Youtube video to downloadable mp3 files',
  title: 'Convert to mp3',
  videoPageOnly: true,
  defaultData: {
    counter: 0,
    songs: [],
    flvto: true,
    savemp3: true,
    onlinevideoconverter: true,
    simpleyoutubeconverter: true,
  },
  isInHistoryTab: true,
  actionTitle: 'converted',
  hasSettings: true,
};

export default meta;
