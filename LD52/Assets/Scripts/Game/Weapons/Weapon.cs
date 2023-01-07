using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Weapon : MonoBehaviour
{
    public Vector3 Target;
    private List<IWeaponBehaviour> _behaviours = new ();
    private List<IWeaponConstraint> _constraints = new();

    private void Awake()
    {
        _constraints = GetComponents<IWeaponConstraint>().ToList();
        _behaviours = GetComponents<IWeaponBehaviour>().ToList();
    }

    public void Shoot()
    {
        foreach (IWeaponConstraint constraint in _constraints)
            if (!constraint.TryUse()) return;

        _behaviours.ForEach(b => b.ExecuteBehaviour(Target));
    }

    void Update()
    {
        _behaviours.ForEach(b => b.UpdateBehaviour(Target));
    }
}
