# React Image Button
Add buttons inside an image with react-image-button library.

![react-image-button](https://github.com/sumukhah/React-Image-Buttons/blob/develop/gif.gif?raw=true)

### Using with zero parameters
```
  import ImageButton from 'react-image-button';

  const App = () => {
    return (
      <ImageButton img="image-location" >
        <button primary> Image-button </button>
      </ImageButton>
    )
  }
```

| Parameters | Default value | is Required | Possible values |
| :--------------: | :---------: | :----------: |:---------------- |
|img|null|True |location\image component|
|button|null|True|React component|
|zoomOnHover|1|False|1, 0, -1|
|animationDuration|1|False|Number|
|buttonPosition|center|False|"top", "bottom", "center"|
|onMouseEnter|null|False|callback function|
|onMouseLeave|null|False|callback function|
|onClick|null|False|callback function|
|imageBackgroundColor|#FFFFFF|False|string color code/name|
|containerStyle|{}|False|Style Object|
|alwaysShowButton|False|False|Boolean|
|buttonsContainerStyle|{}|False|Style object|

if you are interested in contributing to this repository, read [contributing.md](https://github.com/sumukhah/React-Image-Button/blob/develop/contributing.md)