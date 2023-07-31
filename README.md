# MCMNGR: Minecraft Manager

A tool to help manage multiple Minecraft server instances remotely.

## Features

- Start, stop, restart, and kill a server
- Log into a server console
- View server logs
- View server status
  - Online, offline, starting, stopping, restarting, or killing
  - Current players/maximum players
  - Server version, IP, and port
  - Server CPU, RAM, network and disk usage
  - Server performance metrics (TPS and MSPT)
  - Server uptime
- Manage (add, remove, update) mods/plugins, using [CurseForge](https://www.curseforge.com/), [Modrinth](https://modrinth.com/), [GitHub](https://github.com) or file upload as sources
- Manage other server files
  - Config files
  - World files
  - Server icon
  - Server properties
  - Server MOTD
  - Players files
  - Whitelist, Banlist, Operator list
  - Server JAR
  - Manage server backups
- World backups
  - Offsite backups for premium users (coming soon)
- Analize server files for viruses

All of this done through a nice GUI or even a CLI!

## Installation

### Server-side

> **Note:** "Server-side" refers to the machine that will be running the Minecraft server, not the machine that will be running the manager.

1. Download the latest release from the [releases page](/releases).
2. Execute the downloaded file, the installer will guide you through
  - Choose a directory to install the manager to
  - Choose a port to run the manager on
  - Create a user account, if needed, or log in with an existing one
  - Automatically start the manager on boot, if wanted

This installer is entirely done through the command line, so you can use it on a headless server without any issues.

### Client-side

> **Note:** "Client-side" refers to the machine that will be running the manager, not the machine that will be running the Minecraft server.

1. Download the latest release from the [releases page](/releases).
2. Execute the downloaded file and follow the installer's instructions.
3. Enter your account credentials, or create a new account.
4. Start managing your servers!

## Screenshots

> Section reserved for screenshots

## Roadmap

- CLI (General functions, used between CLI and GUI in the backend)
  - [ ] Login
  - [ ] Start server
  - [ ] Stop server
  - [ ] Restart server
  - [ ] Kill server
  - [ ] Execute command through server console
  - [ ] View server log
  - [ ] View server status
  - [ ] View server performance
  - [ ] Add mod/plugin
  - [ ] Remove mod/plugin
  - [ ] Update mod/plugin
  - [ ] Manage Config files
  - [ ] Manage World files
  - [ ] Manage Server icon
  - [ ] Manage Server properties
  - [ ] Manage Server MOTD
  - [ ] Manage Whitelist, Banlist, Operator list
  - [ ] Change Server JAR version
  - [ ] Manage server backups
  - [ ] Analyze server files for viruses
- GUI (General functions, used only by the GUI):
  - [ ] Manage Players files
  - [ ] Log into server console
- GUI (Interface design and functionality):
  - [ ] Login screen
  - [ ] Start, Stop, Restart, Kill server
  - [ ] Console view
  - [ ] Log view
  - [ ] Server status view
  - [ ] Mod management
  - [ ] Config management
  - [ ] Server icon management
  - [ ] Server properties management
  - [ ] Server MOTD management
  - [ ] Players files management
  - [ ] Whitelist, Banlist, Operator list management
  - [ ] Server JAR version swicther
  - [ ] Server backups manager
  - [ ] Analyze server files for viruses
- Add support for:
  - Java Edition servers:
    - [ ] Vanilla servers
    - [ ] Forge servers
    - [ ] Fabric servers
    - [ ] Spigot servers
    - [ ] Paper servers
  - Bedrock Edition servers:
    - [ ] Bedrock Dedicated servers
  - Proxy servers:
    - [ ] BungeeCord proxy
    - [ ] Waterfall proxy
    - [ ] Velocity proxy
    - [ ] Geyser proxy
- Paid features
  - [ ] Offsite backups
  - [ ] Server notifications
- [ ] Add sources support for mods/plugins
  - [ ] CurseForge
  - [ ] Modrinth
  - [ ] GitHub
  - [ ] File upload

### Want a new feature? [Ask here](/issues/new)