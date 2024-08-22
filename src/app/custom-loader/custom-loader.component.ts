import { Component, OnInit, Input } from '@angular/core';
import { LoaderConfig } from '../interfaces/Loader';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class CustomLoaderComponent implements OnInit {
  @Input() configType: 'A' | 'B' = 'A';
  @Input() customConfig?: LoaderConfig;
  @Input() isLoading: boolean = false;

  config: LoaderConfig = {};

  currentImage: string = '';
  imgIndex: number = 0;

  ngOnInit() {
    this.applyDefaultConfig();
    if (this.customConfig) this.applyCustomConfig();
    if (this.config.images && this.config.images.length > 0)
      this.startImageRotation();

    console.log(this.config);
  }

  applyDefaultConfig() {
    if (this.configType === 'A') {
      this.config = {
        images: [
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d53435a6-b91e-469c-98f4-9215f6ba3dba/dg5uobh-6c5011da-b385-448c-b65d-a1a222567907.png/v1/fill/w_1280,h_640,q_80,strp/8bit_style_cyberpunk_city_2_by_softwmaster_dg5uobh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvZDUzNDM1YTYtYjkxZS00NjljLTk4ZjQtOTIxNWY2YmEzZGJhXC9kZzV1b2JoLTZjNTAxMWRhLWIzODUtNDQ4Yy1iNjVkLWExYTIyMjU2NzkwNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.k_OoAlMOEbWvLqGQDZPoQG4Ect98qRXJ4I_8aAJt77I',
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d53435a6-b91e-469c-98f4-9215f6ba3dba/dg5unzl-98dde225-12e9-426d-9985-b9cb3f3d4ac4.png/v1/fill/w_1280,h_640,q_80,strp/8bit_style_cyberpunk_city_landscape__by_softwmaster_dg5unzl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvZDUzNDM1YTYtYjkxZS00NjljLTk4ZjQtOTIxNWY2YmEzZGJhXC9kZzV1bnpsLTk4ZGRlMjI1LTEyZTktNDI2ZC05OTg1LWI5Y2IzZjNkNGFjNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yWu6rJR35DJax5n5RCTlIys65pyFu5NVrTBqebAKCMY',
          'https://img.freepik.com/free-photo/8-bit-graphics-pixels-scene-with-city-sunset_23-2151120910.jpg?t=st=1724339757~exp=1724343357~hmac=ac054630ebf6eda1e2a067d06cb5a905a632f8428ffed588a19ebcd6cb8fc062&w=1380',
        ],
        description: 'Loading...',
        descriptionColor: '#fff',
        loaderType: 'circles',
        loaderColor: 'white',
        backgroundColor: '#f0f0f0',
        imageInterval: 3000,
      };
    } else if (this.configType === 'B') {
      this.config = {
        images: [
          'https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg',
          'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg',
          'https://manybackgrounds.com/images/hd/fantasy-planets-in-space-eadjr5zrwm5n88mo.jpg',
        ],
        description: 'Please wait',
        descriptionColor: '#555555',
        loaderType: 'dots',
        loaderColor: 'primary',
        backgroundColor: '#ffffff',
        imageInterval: 8000,
      };
    }
  }

  applyCustomConfig() {
    this.config = { ...this.config, ...this.customConfig };
  }

  startImageRotation() {
    this.currentImage = this.config.images![this.imgIndex];
    setInterval(() => {
      this.imgIndex = (this.imgIndex + 1) % this.config.images!.length;
      this.currentImage = this.config.images![this.imgIndex];
    }, this.config.imageInterval);
  }
}
