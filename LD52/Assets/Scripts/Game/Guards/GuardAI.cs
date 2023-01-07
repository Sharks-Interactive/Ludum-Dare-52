using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GuardAI : MonoBehaviour
{
    public Weapon Weapon;
    public GuardVision Vision;

    private void Awake()
    {
        Weapon = GetComponentInChildren<Weapon>();
        Vision = GetComponent<GuardVision>();
    }

    void FixedUpdate()
    {
        if (Vision.Target != null)
        {
            Weapon.Target = Vision.Target.transform.position;
            Weapon.Shoot();
        }
    }
}
