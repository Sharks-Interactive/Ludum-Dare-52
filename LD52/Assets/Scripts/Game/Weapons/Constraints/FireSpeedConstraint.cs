using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FireSpeedConstraint : MonoBehaviour, IWeaponConstraint
{
    public float Downtime = 0.5f;

    private float _lastShotTime;

    public bool TryUse()
    {
        if (Time.time < _lastShotTime) return false;

        _lastShotTime = Time.time + Downtime;
        return true;
    }
}
