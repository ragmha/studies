# Random Notes 📝

## TextView”

*   `android:textAllCaps = "false"`

## Image View

*   `android:scaleType: centerCrop` - Full bleed image

## View Groups
> Container for views!


## Layout weight

> It divides the whole height of the screen by the weight sum, it evenly spaces the height when the weight is same


## RELATIVE LAYOUT (Relative to parent)
![Relative to parent](./view-groups18.png)
```xml
<RelativeLayout
       xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:padding="16dp">

   <TextView
        android:text="I’m in this corner"
        android:layout_height="wrap_content"
        android:layout_width="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_alignParentLeft="true" />

    <TextView
        android:text="No, up here"
        android:layout_height="wrap_content"
        android:layout_width="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentLeft="true" />

    <TextView
        android:text="Wait, I’m here"
        android:layout_height="wrap_content"
        android:layout_width="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_alignParentRight="true" />

    <TextView
        android:text="Actually, I’m here"
        android:layout_height="wrap_content"
        android:layout_width="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_alignParentRight="true" />

</RelativeLayout>

```

## RELATIVE LAYOUT

> Positioning children relative to other views

*   Assigning view ID names

```java
android:id="@+id/.._text_view"
```

*   Positioning children relative to other views

```java
android:layout_toLeftof= "@id/.._text_view"
```
## Building a List item with Relative Layout
![listItem](./list-item.png)

```xml
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical" >

    <ImageView
        android:id="@+id/photo"
        android:layout_width="56dp"
        android:layout_height="56dp"
        android:scaleType="centerCrop"
        android:src="@drawable/ocean" />

    <TextView
        android:id="@+id/name"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_toRightOf="@id/photo"
        android:text="Pebble Beach"
        android:textAppearance="?android:textAppearanceMedium" />

    <TextView
        android:id="@+id/location"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_toRightOf="@id/photo"
        android:layout_below="@id/name"
        android:text="California"
        android:textAppearance="?android:textAppearanceSmall" />

    <TextView
        android:id="@+id/distance"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_toRightOf="@id/photo"
        android:layout_below="@id/location"
        android:text="10 miles away"
        android:textAppearance="?android:textAppearanceSmall" />

</RelativeLayout>
```
---
## Adding Whitespace

## Padding vs Margin

![padding-vs-margin](./padding-vs-margin.png)


## Padding
![padding](./padding.png)

## Margin
![margin](./margin.png)

## Some Examples  💁
![margin-vs-padding example](./margin-vs-padding-example.png)

---
## Challenge 🔥

![Challenge](./challenge-margin-vs-padding.png)

```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <ImageView
        android:src="@drawable/ocean"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:scaleType="centerCrop"/>

    <TextView
        android:text="You're invited!"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingTop="16dp"
        android:paddingLeft="16dp"
        android:paddingRight="16dp"
        android:paddingBottom="8dp"
        android:textColor="@android:color/white"
        android:textSize="45sp"
        android:background="#009688"/>

    <TextView
        android:text="Bonfire at the beach"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingLeft="16dp"
        android:paddingBottom="16dp"
        android:paddingRight="16dp"
        android:textColor="@android:color/white"
        android:textSize="24sp"
        android:background="#009688"/>

</LinearLayout>
```

## Another padding vs margin

![PADDING VS MARGIN](./padding-vs-layout-margin.png)
