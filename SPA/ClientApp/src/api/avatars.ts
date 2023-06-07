import axiosInstance from './_share';

export default class AvatarAPI {
  static async uploadAvatar(avatar: File) {
    const byteAvatar = await toBase64(avatar);
    await axiosInstance.post('/api/v1/avatars', byteAvatar);
  }

  static async getAvatarById(id: string): Promise<string> {
    const response = await axiosInstance.get(`/api/v1/avatars/${id}`);
    return response.data;
  }
}

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
