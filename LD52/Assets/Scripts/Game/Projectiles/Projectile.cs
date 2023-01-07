using UnityEngine;

public class Projectile : MonoBehaviour
{
    public int TeamID;
    public ProjectileData Data {
        get => _data;
        private set {
            _data = value;

            _renderer.sprite = _data.Image;
            _renderer.color = _data.Colour;
        } 
    }
    private ProjectileData _data;

    private SpriteRenderer _renderer
    {
        get { if (m_renderer == null) m_renderer = GetComponent<SpriteRenderer>(); return m_renderer; }
        set { m_renderer = value; }
    }
    private SpriteRenderer m_renderer;

    public void Bootstrap(ProjectileData data, int teamID) { Data = data; TeamID = teamID; }

    public void FixedUpdate()
    {
        transform.Translate(0, Data.Speed, 0, Space.Self);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        IProjectileReceiver target = collision.GetComponent<IProjectileReceiver>();
        if (target.TeamID == TeamID) return;

        target.OnProjectileReceived(Data);
    }
}

public static class ProjectileUtility
{
    public static GameObject CreateProjectile(ProjectileData Data, int TeamID, Quaternion Rotation, Vector3 Position)
    {
        GameObject projectile = Object.Instantiate(
            Resources.Load<GameObject>("Projectile"),
            Position,
            Rotation
        );
        projectile.GetComponent<Projectile>().Bootstrap(Data, TeamID);

        return projectile;
    }
}
