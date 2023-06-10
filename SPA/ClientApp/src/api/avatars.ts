import axiosInstance from './_share';

export default class AvatarAPI {
  static async uploadAvatar(avatar: File) {
    const formData = new FormData();
    formData.append('avatar', avatar, avatar.name);
    await axiosInstance.post('/api/v1/avatars', formData, {
      headers: { 'Content-Type': `multipart/form-data` },
    });
  }
}
