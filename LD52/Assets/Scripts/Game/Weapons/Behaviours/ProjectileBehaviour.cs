using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ProjectileBehaviour : MonoBehaviour, IWeaponBehaviour
{
    public Transform FirePoint;
    public ProjectileData Data;
    public int TeamID;

    public void ExecuteBehaviour(Vector3 Target)
    {
        ProjectileUtility.CreateProjectile(
            Data,
            TeamID,
            FirePoint.rotation,
            transform.position
        );
    }

    public void UpdateBehaviour(Vector3 Target)
    {
        transform.right = (Target - transform.position).normalized;
    }
}
