import axiosInstance from './_share';

export default class AvatarAPI {
  static async uploadAvatar(avatar: File) {
    const formData = new FormData();
    formData.append('avatar', avatar, avatar.name);
    await axiosInstance.post('/api/v1/avatars', formData, {
      headers: { 'Content-Type': `multipart/form-data` },
    });
  }

  static async getAvatarById(id: string): Promise<string> {
    const response = await axiosInstance.get(`/api/v1/avatars/${id}`);
    return response.data;
  }
}
