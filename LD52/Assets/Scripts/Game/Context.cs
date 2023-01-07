using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Context
{
    public static Context current = new ();

    public bool IsRunning = true;
    public Camera MainCamera;
    public CameraShake Shake;
}
